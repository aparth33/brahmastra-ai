import { BaseAgent } from './BaseAgent';

export class FileAgent extends BaseAgent {
  name = 'FileAgent';
  description = 'Handles file operations, project structure, and code generation';
  capabilities = [
    'setup', 'structure', 'create', 'model', 'component', 'validation', 'file'
  ];
}