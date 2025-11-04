import { ExecutionPlan, Task } from '../types';
import chalk from 'chalk';

export class PlanVisualizer {
  /**
   * Creates a visual ASCII diagram of the execution plan showing task flow and dependencies
   */
  static createFlowDiagram(plan: ExecutionPlan): string {
    const tasks = plan.tasks;
    let diagram = '';
    
    // Header
    diagram += chalk.blue('┌─────────────────────────────────────────────────────────────────┐\n');
    diagram += chalk.blue('│') + chalk.bold.white('                     🚀 EXECUTION FLOW DIAGRAM                   ') + chalk.blue('│\n');
    diagram += chalk.blue('└─────────────────────────────────────────────────────────────────┘\n\n');

    // Agent Color Mapping
    const agentColors: { [key: string]: any } = {
      'FileAgent': chalk.green,
      'APIAgent': chalk.blue,
      'TestAgent': chalk.yellow,
      'DatabaseAgent': chalk.magenta,
      'UIAgent': chalk.cyan
    };

    // Draw task flow
    tasks.forEach((task, index) => {
      const colorFn = agentColors[task.agent] || chalk.white;
      const taskNum = index + 1;
      const isLast = index === tasks.length - 1;
      
      // Task box
      diagram += colorFn(`    ┌──[${taskNum}]─────────────────────────────────┐\n`);
      diagram += colorFn(`    │ ${task.agent.padEnd(12)} │ ${this.truncateText(task.description, 15).padEnd(15)} │\n`);
      diagram += colorFn(`    └────────────────────────────────────┘\n`);
      
      // Connection arrow (if not last)
      if (!isLast) {
        diagram += chalk.gray(`                   ↓\n`);
        diagram += chalk.gray(`                 [dep]\n`);
        diagram += chalk.gray(`                   ↓\n`);
      }
    });

    // Footer with agent legend
    diagram += '\n' + chalk.blue('┌─────────────────────────────────────────────────────────────────┐\n');
    diagram += chalk.blue('│') + chalk.bold.white('                         AGENT LEGEND                            ') + chalk.blue('│\n');
    diagram += chalk.blue('├─────────────────────────────────────────────────────────────────┤\n');
    
    const usedAgents = [...new Set(tasks.map(t => t.agent))];
    usedAgents.forEach(agent => {
      const colorFn = agentColors[agent] || chalk.white;
      diagram += chalk.blue('│ ') + colorFn(`${agent.padEnd(15)}`) + ' - ' + this.getAgentDescription(agent).padEnd(40) + chalk.blue(' │\n');
    });
    
    diagram += chalk.blue('└─────────────────────────────────────────────────────────────────┘\n');

    return diagram;
  }

  /**
   * Creates a battle plan visualization with creative ASCII art
   */
  static createBattlePlan(plan: ExecutionPlan, confidence: number): string {
    let battlePlan = '';
    
    // Epic header
    battlePlan += chalk.bold.red('\n╔══════════════════════════════════════════════════════════════════╗\n');
    battlePlan += chalk.bold.red('║') + chalk.bold.yellow('                  ⚔️  BRAHMASTRA BATTLE PLAN  ⚔️                   ') + chalk.bold.red('║\n');
    battlePlan += chalk.bold.red('║') + chalk.bold.cyan(`                     ${plan.title.padEnd(30)}                     `) + chalk.bold.red('║\n');
    battlePlan += chalk.bold.red('╚══════════════════════════════════════════════════════════════════╝\n\n');

    // Mission briefing
    const confidenceBar = this.createConfidenceBar(confidence);
    battlePlan += chalk.bold.white('📊 MISSION CONFIDENCE: ') + confidenceBar + chalk.bold.white(` ${Math.round(confidence * 100)}%\n`);
    battlePlan += chalk.bold.white('🎯 TARGET OBJECTIVES: ') + chalk.white(`${plan.tasks.length} tactical operations\n`);
    battlePlan += chalk.bold.white('⏰ DEPLOYMENT TIME: ') + chalk.white(`${plan.createdAt.toLocaleString()}\n\n`);

    // Force deployment
    battlePlan += chalk.bold.blue('🔥 FORCE DEPLOYMENT:\n');
    battlePlan += chalk.blue('═══════════════════\n');
    
    const agentStats = this.calculateAgentStats(plan.tasks);
    Object.entries(agentStats).forEach(([agent, count]) => {
      const icon = this.getAgentIcon(agent);
      battlePlan += chalk.white(`${icon} ${agent}: `) + chalk.bold.green(`${count} operations\n`);
    });

    return battlePlan;
  }

  /**
   * Creates a dependency matrix showing task relationships
   */
  static createDependencyMatrix(tasks: Task[]): string {
    let matrix = '';
    
    matrix += chalk.bold.cyan('\n🕸️  DEPENDENCY MATRIX\n');
    matrix += chalk.cyan('═══════════════════\n\n');

    // Create a simple dependency visualization
    tasks.forEach((task, index) => {
      const taskNum = index + 1;
      const hasDepencies = task.dependencies.length > 0;
      
      if (hasDepencies) {
        const depCount = task.dependencies.length;
        matrix += chalk.yellow(`[${taskNum}] ${task.description}\n`);
        matrix += chalk.gray(`    └── Blocked by ${depCount} task(s)\n`);
      } else {
        matrix += chalk.green(`[${taskNum}] ${task.description}\n`);
        matrix += chalk.gray(`    └── Ready to execute\n`);
      }
      matrix += '\n';
    });

    return matrix;
  }

  private static truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  }

  private static getAgentDescription(agent: string): string {
    const descriptions: { [key: string]: string } = {
      'FileAgent': 'File operations & project structure',
      'APIAgent': 'REST endpoints & middleware',
      'TestAgent': 'Unit & integration testing',
      'DatabaseAgent': 'Database schema & queries',
      'UIAgent': 'Frontend styling & components'
    };
    return descriptions[agent] || 'Specialized task execution';
  }

  private static getAgentIcon(agent: string): string {
    const icons: { [key: string]: string } = {
      'FileAgent': '📁',
      'APIAgent': '🌐',
      'TestAgent': '🧪',
      'DatabaseAgent': '🗄️',
      'UIAgent': '🎨'
    };
    return icons[agent] || '⚙️';
  }

  private static createConfidenceBar(confidence: number): string {
    const barLength = 20;
    const filledLength = Math.round(confidence * barLength);
    const emptyLength = barLength - filledLength;
    
    let bar = chalk.green('█'.repeat(filledLength));
    if (emptyLength > 0) {
      bar += chalk.gray('░'.repeat(emptyLength));
    }
    
    return `[${bar}]`;
  }

  private static calculateAgentStats(tasks: Task[]): { [agent: string]: number } {
    const stats: { [agent: string]: number } = {};
    tasks.forEach(task => {
      stats[task.agent] = (stats[task.agent] || 0) + 1;
    });
    return stats;
  }
}