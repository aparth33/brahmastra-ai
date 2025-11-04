import { Agent } from '../types';
import { FileAgent } from './FileAgent';
import { APIAgent } from './APIAgent';
import { TestAgent } from './TestAgent';
import { DatabaseAgent } from './DatabaseAgent';

export class AgentRegistry {
  private static agents: Map<string, Agent> = new Map();

  static {
    // Initialize agents
    this.registerAgent(new FileAgent());
    this.registerAgent(new APIAgent());
    this.registerAgent(new TestAgent());
    this.registerAgent(new DatabaseAgent());
  }

  static registerAgent(agent: Agent): void {
    this.agents.set(agent.name, agent);
  }

  static getAgent(name: string): Agent | undefined {
    return this.agents.get(name);
  }

  static getAllAgents(): Agent[] {
    return Array.from(this.agents.values());
  }

  static getAgentForTask(taskDescription: string): Agent {
    // Simple matching logic - in a real system this would be more sophisticated
    const description = taskDescription.toLowerCase();
    
    if (description.includes('test')) return this.getAgent('TestAgent')!;
    if (description.includes('api') || description.includes('endpoint') || description.includes('authentication')) {
      return this.getAgent('APIAgent')!;
    }
    if (description.includes('database') || description.includes('schema')) {
      return this.getAgent('DatabaseAgent')!;
    }
    
    // Default to FileAgent for general tasks
    return this.getAgent('FileAgent')!;
  }
}