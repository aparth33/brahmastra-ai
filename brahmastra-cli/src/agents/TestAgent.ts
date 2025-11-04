import { BaseAgent } from './BaseAgent';

export class TestAgent extends BaseAgent {
  name = 'TestAgent';
  description = 'Handles test creation and execution';
  capabilities = [
    'test', 'testing', 'unit', 'integration', 'spec'
  ];
}