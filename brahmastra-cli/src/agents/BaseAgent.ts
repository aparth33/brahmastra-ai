import { Agent, Task } from '../types';

export abstract class BaseAgent implements Agent {
  abstract name: string;
  abstract description: string;
  abstract capabilities: string[];

  async execute(task: Task): Promise<boolean> {
    console.log(`🤖 ${this.name}: Starting "${task.description}"`);
    
    // Simulate work time
    await this.simulateWork();
    
    // Simulate success/failure (90% success rate for demo)
    const success = Math.random() > 0.1;
    
    if (success) {
      console.log(`✅ ${this.name}: Completed "${task.description}"`);
    } else {
      console.log(`❌ ${this.name}: Failed "${task.description}"`);
    }
    
    return success;
  }

  protected async simulateWork(): Promise<void> {
    // Random delay between 1-3 seconds to simulate work
    const delay = 1000 + Math.random() * 2000;
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  protected canHandle(task: Task): boolean {
    return this.capabilities.some(cap => 
      task.description.toLowerCase().includes(cap.toLowerCase())
    );
  }
}