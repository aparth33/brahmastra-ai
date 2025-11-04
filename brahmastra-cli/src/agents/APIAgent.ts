import { BaseAgent } from './BaseAgent';

export class APIAgent extends BaseAgent {
  name = 'APIAgent';
  description = 'Handles API development, endpoints, and authentication';
  capabilities = [
    'api', 'endpoint', 'route', 'authentication', 'middleware', 'crud'
  ];
}