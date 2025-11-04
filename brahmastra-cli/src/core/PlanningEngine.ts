import { ExecutionPlan, PlanningResult, Task } from '../types';
import { TaskParser } from './TaskParser';

export class PlanningEngine {
  static createPlan(userRequest: string): PlanningResult {
    const tasks = TaskParser.parseRequest(userRequest);
    
    // Sort tasks by priority and dependencies
    const sortedTasks = this.resolveDependencies(tasks);
    
    const plan: ExecutionPlan = {
      id: this.generatePlanId(),
      title: this.generateTitle(userRequest),
      description: userRequest,
      tasks: sortedTasks,
      createdAt: new Date()
    };

    // Calculate confidence based on how well we understand the request
    const confidence = this.calculateConfidence(userRequest, tasks);
    
    const reasoning = this.generateReasoning(userRequest, tasks);

    return {
      plan,
      confidence,
      reasoning
    };
  }

  private static resolveDependencies(tasks: Task[]): Task[] {
    // For this simplified version, we'll create a simple dependency chain
    // where each task depends on the previous one
    return tasks.map((task, index) => ({
      ...task,
      dependencies: index > 0 ? [tasks[index - 1].id] : []
    })).sort((a, b) => a.priority - b.priority);
  }

  private static calculateConfidence(request: string, tasks: Task[]): number {
    const lowerRequest = request.toLowerCase();
    
    // Higher confidence for recognized patterns
    if (lowerRequest.includes('rest api') || 
        lowerRequest.includes('web app') || 
        lowerRequest.includes('database')) {
      return 0.85;
    }
    
    // Lower confidence for unknown patterns
    if (tasks.length === 1) {
      return 0.4;
    }
    
    return 0.65;
  }

  private static generateTitle(request: string): string {
    const words = request.split(' ');
    if (words.length <= 6) {
      return request;
    }
    return words.slice(0, 6).join(' ') + '...';
  }

  private static generateReasoning(request: string, tasks: Task[]): string {
    const agentTypes = [...new Set(tasks.map(t => t.agent))];
    
    return `Based on your request, I've identified ${tasks.length} key tasks that require ` +
           `coordination between ${agentTypes.length} different agents (${agentTypes.join(', ')}). ` +
           `The tasks are structured with dependencies to ensure proper execution order.`;
  }

  private static generatePlanId(): string {
    return `plan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}