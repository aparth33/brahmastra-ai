export interface Task {
  id: string;
  description: string;
  agent: string;
  dependencies: string[];
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  priority: number;
}

export interface ExecutionPlan {
  id: string;
  title: string;
  description: string;
  tasks: Task[];
  createdAt: Date;
}

export interface Agent {
  name: string;
  description: string;
  capabilities: string[];
  execute: (task: Task) => Promise<boolean>;
}

export interface PlanningResult {
  plan: ExecutionPlan;
  confidence: number;
  reasoning: string;
}