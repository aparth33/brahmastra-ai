import { BaseAgent } from './BaseAgent';

export class DatabaseAgent extends BaseAgent {
  name = 'DatabaseAgent';
  description = 'Handles database operations and schema management';
  capabilities = [
    'database', 'schema', 'migration', 'sql', 'connection'
  ];
}