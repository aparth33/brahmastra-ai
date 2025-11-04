import chalk from 'chalk';
import { ExecutionPlan, Task } from '../types';
import { AgentRegistry } from '../agents/AgentRegistry';
import { BattleSimulator } from '../battle/BattleSimulator';
import { AgentPersonalities } from '../agents/AgentPersonalities';

export class Orchestrator {
  private currentPlan: ExecutionPlan | null = null;
  private executionInProgress = false;

  async executePlan(plan: ExecutionPlan): Promise<void> {
    if (this.executionInProgress) {
      throw new Error('Another execution is already in progress');
    }

    this.currentPlan = plan;
    this.executionInProgress = true;

    console.log(chalk.bold.red('\n╔══════════════════════════════════════════════════════════════════╗'));
    console.log(chalk.bold.red('║') + chalk.bold.yellow('                🏛️  BATTLE DEPLOYMENT INITIATED  🏛️                 ') + chalk.bold.red('║'));
    console.log(chalk.bold.red('║') + chalk.bold.cyan(`                      ${plan.title.padEnd(30)}                      `) + chalk.bold.red('║'));
    console.log(chalk.bold.red('╚══════════════════════════════════════════════════════════════════╝\n'));

    try {
      await this.executeTasksInOrder(plan.tasks);
      
      // Epic campaign victory
      console.log(chalk.bold.green('\n🏆 CAMPAIGN VICTORY ACHIEVED! 🏆'));
      console.log(chalk.green('═'.repeat(35)));
      console.log(chalk.white('All agents have completed their missions with honor!'));
      console.log(chalk.white('The BRAHMASTRA battle plan has been executed flawlessly!\n'));
    } catch (error) {
      console.log(chalk.red('\n💥 Plan execution failed:', error));
      throw error;
    } finally {
      this.executionInProgress = false;
      this.currentPlan = null;
    }
  }

  private async executeTasksInOrder(tasks: Task[]): Promise<void> {
    const completedTasks = new Set<string>();
    
    for (const task of tasks) {
      // Check if dependencies are satisfied
      if (!this.areDependenciesSatisfied(task, completedTasks)) {
        console.log(chalk.yellow(`⏸️  Skipping ${task.description} - dependencies not met`));
        continue;
      }

      // Find appropriate agent
      const agent = AgentRegistry.getAgent(task.agent) || AgentRegistry.getAgentForTask(task.description);
      
      console.log(chalk.bold.blue(`\n📋 MISSION ${tasks.indexOf(task) + 1}/${tasks.length}:`));
      console.log(chalk.white(`   Objective: ${task.description}`));
      console.log(chalk.gray(`   Assigned Agent: ${task.agent}`));
      
      // Get agent personality
      const personality = AgentPersonalities.getPersonality(task.agent);
      
      // Update task status
      task.status = 'in_progress';
      
      try {
        // Execute task with epic battle simulation
        console.log(chalk.yellow(`\n🎭 Deploying ${personality.name}...`));
        const success = await BattleSimulator.simulateBattle(task, personality);
        
        if (success) {
          task.status = 'completed';
          completedTasks.add(task.id);
          
          // Victory celebration
          console.log(chalk.green(`\n✅ MISSION ACCOMPLISHED!`));
          console.log(chalk.white(`   ${personality.name} has secured the objective!`));
        } else {
          task.status = 'failed';
          console.log(chalk.red(`\n❌ MISSION FAILED!`));
          console.log(chalk.gray(`   ${personality.name} was unable to complete the objective.`));
          throw new Error(`Task failed: ${task.description}`);
        }
      } catch (error) {
        task.status = 'failed';
        throw error;
      }
    }
  }

  private areDependenciesSatisfied(task: Task, completedTasks: Set<string>): boolean {
    return task.dependencies.every(depId => completedTasks.has(depId));
  }

  getCurrentPlan(): ExecutionPlan | null {
    return this.currentPlan;
  }

  isExecuting(): boolean {
    return this.executionInProgress;
  }
}