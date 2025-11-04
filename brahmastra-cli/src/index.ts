#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { PlanningEngine } from './core/PlanningEngine';
import { Orchestrator } from './core/Orchestrator';
import { AgentRegistry } from './agents/AgentRegistry';
import { PlanVisualizer } from './utils/PlanVisualizer';
import { AgentPersonalities } from './agents/AgentPersonalities';

const program = new Command();

program
  .name('brahmastra')
  .description('The Ultimate AI Agent Planning Layer - Orchestrate your coding agents with precision')
  .version('1.0.0');

program
  .command('plan')
  .description('Create an execution plan for a development task')
  .argument('<request>', 'Natural language description of what you want to build')
  .option('-e, --execute', 'Execute the plan immediately after creating it')
  .action(async (request: string, options) => {
    try {
      console.log(chalk.blue('🎯 Planning your request...\n'));
      
      const result = PlanningEngine.createPlan(request);
      
      // Display the plan
      displayPlan(result);
      
      if (options.execute) {
        console.log(chalk.yellow('\n⚡ Executing plan automatically...\n'));
        const orchestrator = new Orchestrator();
        await orchestrator.executePlan(result.plan);
      } else {
        const { shouldExecute } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'shouldExecute',
            message: 'Would you like to execute this plan?',
            default: false
          }
        ]);

        if (shouldExecute) {
          const orchestrator = new Orchestrator();
          await orchestrator.executePlan(result.plan);
        }
      }
    } catch (error) {
      console.error(chalk.red('Error:', error));
      process.exit(1);
    }
  });

program
  .command('agents')
  .description('Meet your AI warrior companions and their battle personalities')
  .option('-p, --personalities', 'Show detailed agent personalities and battle profiles')
  .action((options) => {
    if (options.personalities) {
      console.log(chalk.bold.red('\n╔══════════════════════════════════════════════════════════════════╗'));
      console.log(chalk.bold.red('║') + chalk.bold.yellow('                 🎭 AGENT PERSONALITY PROFILES 🎭                  ') + chalk.bold.red('║'));
      console.log(chalk.bold.red('╚══════════════════════════════════════════════════════════════════╝\n'));
      
      const agentTypes = ['FileAgent', 'APIAgent', 'TestAgent', 'DatabaseAgent', 'UIAgent'];
      agentTypes.forEach((agentType, index) => {
        AgentPersonalities.displayAgentProfile(agentType);
        if (index < agentTypes.length - 1) {
          console.log(chalk.gray('\n' + '─'.repeat(50) + '\n'));
        }
      });
    } else {
      console.log(chalk.bold.blue('\n🤖 BRAHMASTRA AGENT BATTALION:\n'));
      console.log(chalk.blue('════════════════════════════════\n'));
      
      const agents = AgentRegistry.getAllAgents();
      agents.forEach((agent, index) => {
        const personality = AgentPersonalities.getPersonality(agent.name);
        
        console.log(chalk.bold.green(`${personality.name} (${agent.name})`));
        console.log(chalk.white(`  📝 ${personality.description}`));
        console.log(chalk.gray(`  🛠️  Capabilities: ${agent.capabilities.join(', ')}`));
        console.log(chalk.yellow(`  💭 "${personality.motto}"`));
        
        if (index < agents.length - 1) {
          console.log('');
        }
      });
      
      console.log(chalk.cyan('\n💡 Use --personalities flag to see detailed battle profiles!'));
    }
  });

program
  .command('verify')
  .description('Simulate drift detection and plan verification')
  .argument('[planId]', 'Plan ID to verify (default: demo)', 'demo')
  .action(async (planId: string) => {
    console.log(chalk.bold.blue('🔍 INITIALIZING DRIFT DETECTION PROTOCOL...\n'));
    
    // Simulate verification process
    const verificationResult = simulateVerification(planId);
    displayVerificationResults(verificationResult);
  });

program
  .command('interactive')
  .description('Start interactive mode for continuous planning')
  .action(async () => {
    console.log(chalk.blue('🔄 Starting BRAHMASTRA interactive mode. Type "exit" to quit.\n'));
    
    while (true) {
      const { request } = await inquirer.prompt([
        {
          type: 'input',
          name: 'request',
          message: 'What would you like to build?',
          validate: (input: string) => input.trim().length > 0 || 'Please enter a request'
        }
      ]);

      if (request.toLowerCase().trim() === 'exit') {
        console.log(chalk.blue('👋 BRAHMASTRA powering down. Goodbye!'));
        break;
      }

      try {
        const result = PlanningEngine.createPlan(request);
        displayPlan(result);
        
        const { action } = await inquirer.prompt([
          {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
              { name: '🚀 Execute this plan', value: 'execute' },
              { name: '📝 Create another plan', value: 'continue' },
              { name: '🚪 Exit', value: 'exit' }
            ]
          }
        ]);

        if (action === 'execute') {
          const orchestrator = new Orchestrator();
          await orchestrator.executePlan(result.plan);
        } else if (action === 'exit') {
          console.log(chalk.blue('👋 BRAHMASTRA powering down. Goodbye!'));
          break;
        }
      } catch (error) {
        console.error(chalk.red('Error:', error));
      }

      console.log('\n');
    }
  });

function displayPlan(result: any) {
  // Epic battle plan header
  console.log(PlanVisualizer.createBattlePlan(result.plan, result.confidence));
  
  // Strategic reasoning
  console.log(chalk.bold.white('📋 STRATEGIC ANALYSIS:'));
  console.log(chalk.blue('══════════════════════'));
  console.log(chalk.white(`   ${result.reasoning}\n`));
  
  // Visual flow diagram
  console.log(PlanVisualizer.createFlowDiagram(result.plan));
  
  // Dependency matrix
  console.log(PlanVisualizer.createDependencyMatrix(result.plan.tasks));
  
  // Mission readiness summary
  console.log(chalk.bold.green('✅ MISSION READINESS SUMMARY:'));
  console.log(chalk.green('═══════════════════════════════'));
  console.log(chalk.white(`🎯 Total Operations: ${result.plan.tasks.length}`));
  console.log(chalk.white(`📊 Success Probability: ${Math.round(result.confidence * 100)}%`));
  console.log(chalk.white(`⏰ Created: ${result.plan.createdAt.toLocaleString()}`));
  console.log(chalk.white(`🆔 Mission ID: ${result.plan.id}\n`));
}

function simulateVerification(planId: string) {
  // Simulate different verification scenarios
  const scenarios = [
    {
      id: 'demo',
      name: 'REST API Implementation',
      originalTasks: 6,
      implementedTasks: 5,
      driftDetected: true,
      issues: [
        { type: 'missing', description: 'Unit tests not implemented', severity: 'high' },
        { type: 'drift', description: 'Authentication middleware uses JWT instead of planned OAuth', severity: 'medium' },
        { type: 'quality', description: 'Input validation incomplete for email field', severity: 'low' }
      ],
      suggestions: [
        'Implement missing unit tests for CRUD operations',
        'Update authentication to match OAuth specification',
        'Add email validation regex pattern'
      ]
    }
  ];
  
  return scenarios.find(s => s.id === planId) || scenarios[0];
}

function displayVerificationResults(result: any) {
  // Header
  console.log(chalk.bold.red('╔══════════════════════════════════════════════════════════════════╗'));
  console.log(chalk.bold.red('║') + chalk.bold.yellow('                🛡️  DRIFT DETECTION REPORT  🛡️                    ') + chalk.bold.red('║'));
  console.log(chalk.bold.red('╚══════════════════════════════════════════════════════════════════╝\n'));

  // Plan summary
  console.log(chalk.bold.white('📊 VERIFICATION SUMMARY:'));
  console.log(chalk.blue('═══════════════════════'));
  console.log(chalk.white(`🎯 Plan: ${result.name}`));
  console.log(chalk.white(`📋 Expected Tasks: ${result.originalTasks}`));
  console.log(chalk.white(`✅ Implemented Tasks: ${result.implementedTasks}`));
  console.log(chalk.white(`🚨 Drift Status: ${result.driftDetected ? chalk.red('DETECTED') : chalk.green('CLEAN')}\n`));

  // Issues detected
  if (result.issues.length > 0) {
    console.log(chalk.bold.red('🚨 ISSUES DETECTED:'));
    console.log(chalk.red('══════════════════'));
    
    result.issues.forEach((issue: any, index: number) => {
      const severityColor = issue.severity === 'high' ? chalk.red : 
                           issue.severity === 'medium' ? chalk.yellow : chalk.gray;
      const severityIcon = issue.severity === 'high' ? '🔴' : 
                          issue.severity === 'medium' ? '🟡' : '🟢';
      
      console.log(`${severityIcon} [${issue.type.toUpperCase()}] ${issue.description}`);
      console.log(severityColor(`   Severity: ${issue.severity.toUpperCase()}\n`));
    });
  }

  // Suggested fixes
  console.log(chalk.bold.green('💡 RECOMMENDED FIXES:'));
  console.log(chalk.green('════════════════════'));
  result.suggestions.forEach((suggestion: string, index: number) => {
    console.log(chalk.white(`${index + 1}. ${suggestion}`));
  });
  console.log('');

  // Status summary
  if (result.driftDetected) {
    console.log(chalk.bold.red('⚠️  MISSION STATUS: REQUIRES CORRECTION'));
    console.log(chalk.red('Please address the identified issues before deployment.\n'));
  } else {
    console.log(chalk.bold.green('✅ MISSION STATUS: READY FOR DEPLOYMENT'));
    console.log(chalk.green('All systems nominal. Proceed with confidence.\n'));
  }
}

// Handle the case where no command is provided
if (process.argv.length === 2) {
  program.outputHelp();
  process.exit(0);
}

program.parse();