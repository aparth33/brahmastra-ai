import chalk from 'chalk';
import { ExecutionPlan, Task } from '../types';
import { AgentRegistry } from '../agents/AgentRegistry';

export class Orchestrator {
  private currentPlan: ExecutionPlan | null = null;
  private executionInProgress = false;

  async executePlan(plan: ExecutionPlan): Promise<void> {
    if (this.executionInProgress) {
      throw new Error('Another execution is already in progress');
    }

    this.currentPlan = plan;
    this.executionInProgress = true;

    console.log(chalk.blue(`\n🚀 Executing plan: ${plan.title}\n`));

    try {
      await this.executeTasksInOrder(plan.tasks);
      console.log(chalk.green('\n🎉 Plan execution completed successfully!\n'));
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
      
      console.log(chalk.cyan(`\n[${tasks.indexOf(task) + 1}/${tasks.length}] ${task.description}`));
      console.log(chalk.gray(`   Agent: ${agent.name}`));
      
      // Update task status
      task.status = 'in_progress';
      
      try {
        // Execute task
        const success = await agent.execute(task);
        
        if (success) {
          task.status = 'completed';
          completedTasks.add(task.id);
        } else {
          task.status = 'failed';
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