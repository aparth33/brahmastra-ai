import { Task } from '../types';

interface TaskTemplate {
  description: string;
  agent: string;
  priority: number;
  complexity: 'low' | 'medium' | 'high';
  estimatedTime: string;
}

interface PatternMatcher {
  keywords: string[];
  template: string;
  confidence: number;
}

export class TaskParser {
  private static patterns: PatternMatcher[] = [
    {
      keywords: ['rest', 'api', 'backend', 'server', 'endpoints', 'microservice'],
      template: 'create_rest_api',
      confidence: 0.9
    },
    {
      keywords: ['web', 'app', 'frontend', 'react', 'vue', 'angular', 'dashboard'],
      template: 'build_web_app',
      confidence: 0.85
    },
    {
      keywords: ['database', 'db', 'sql', 'mongodb', 'postgres', 'mysql', 'schema'],
      template: 'setup_database',
      confidence: 0.8
    },
    {
      keywords: ['mobile', 'app', 'ios', 'android', 'react-native', 'flutter'],
      template: 'build_mobile_app',
      confidence: 0.8
    },
    {
      keywords: ['ci', 'cd', 'pipeline', 'deploy', 'docker', 'kubernetes', 'aws'],
      template: 'setup_devops',
      confidence: 0.75
    },
    {
      keywords: ['auth', 'login', 'authentication', 'oauth', 'jwt', 'security'],
      template: 'implement_auth',
      confidence: 0.85
    },
    {
      keywords: ['test', 'testing', 'unit', 'integration', 'e2e', 'cypress', 'jest'],
      template: 'setup_testing',
      confidence: 0.7
    }
  ];

  private static taskTemplates: { [key: string]: TaskTemplate[] } = {
    'create_rest_api': [
      { description: 'Initialize Node.js project with TypeScript', agent: 'FileAgent', priority: 1, complexity: 'low', estimatedTime: '30min' },
      { description: 'Setup Express server with middleware', agent: 'APIAgent', priority: 2, complexity: 'medium', estimatedTime: '1h' },
      { description: 'Design and create data models/schemas', agent: 'DatabaseAgent', priority: 3, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Implement authentication & authorization', agent: 'APIAgent', priority: 4, complexity: 'high', estimatedTime: '3h' },
      { description: 'Create CRUD endpoints with validation', agent: 'APIAgent', priority: 5, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Add comprehensive error handling', agent: 'APIAgent', priority: 6, complexity: 'medium', estimatedTime: '1h' },
      { description: 'Write unit and integration tests', agent: 'TestAgent', priority: 7, complexity: 'high', estimatedTime: '3h' },
      { description: 'Setup API documentation (Swagger)', agent: 'FileAgent', priority: 8, complexity: 'low', estimatedTime: '1h' }
    ],
    'build_web_app': [
      { description: 'Initialize React/Next.js project structure', agent: 'FileAgent', priority: 1, complexity: 'low', estimatedTime: '30min' },
      { description: 'Setup routing and navigation', agent: 'FileAgent', priority: 2, complexity: 'medium', estimatedTime: '1h' },
      { description: 'Create reusable UI component library', agent: 'UIAgent', priority: 3, complexity: 'medium', estimatedTime: '4h' },
      { description: 'Implement state management (Redux/Zustand)', agent: 'FileAgent', priority: 4, complexity: 'high', estimatedTime: '2h' },
      { description: 'Build responsive layouts and styling', agent: 'UIAgent', priority: 5, complexity: 'medium', estimatedTime: '3h' },
      { description: 'Integrate with backend APIs', agent: 'APIAgent', priority: 6, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Add form validation and error handling', agent: 'FileAgent', priority: 7, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Implement authentication flow', agent: 'APIAgent', priority: 8, complexity: 'high', estimatedTime: '2h' },
      { description: 'Add unit tests and E2E testing', agent: 'TestAgent', priority: 9, complexity: 'high', estimatedTime: '4h' }
    ],
    'setup_database': [
      { description: 'Choose optimal database technology', agent: 'DatabaseAgent', priority: 1, complexity: 'medium', estimatedTime: '1h' },
      { description: 'Design normalized database schema', agent: 'DatabaseAgent', priority: 2, complexity: 'high', estimatedTime: '3h' },
      { description: 'Setup database connection and pooling', agent: 'DatabaseAgent', priority: 3, complexity: 'medium', estimatedTime: '1h' },
      { description: 'Create migration and seed scripts', agent: 'DatabaseAgent', priority: 4, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Implement database ORM/query layer', agent: 'DatabaseAgent', priority: 5, complexity: 'high', estimatedTime: '3h' },
      { description: 'Add database backup and recovery', agent: 'DatabaseAgent', priority: 6, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Setup monitoring and performance tuning', agent: 'DatabaseAgent', priority: 7, complexity: 'high', estimatedTime: '2h' }
    ],
    'build_mobile_app': [
      { description: 'Setup React Native/Flutter project', agent: 'FileAgent', priority: 1, complexity: 'medium', estimatedTime: '1h' },
      { description: 'Configure navigation and screen structure', agent: 'FileAgent', priority: 2, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Design adaptive UI components', agent: 'UIAgent', priority: 3, complexity: 'high', estimatedTime: '4h' },
      { description: 'Implement device-specific features', agent: 'FileAgent', priority: 4, complexity: 'high', estimatedTime: '3h' },
      { description: 'Add offline capabilities and storage', agent: 'FileAgent', priority: 5, complexity: 'high', estimatedTime: '3h' },
      { description: 'Integrate push notifications', agent: 'APIAgent', priority: 6, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Setup app store deployment pipeline', agent: 'FileAgent', priority: 7, complexity: 'medium', estimatedTime: '2h' }
    ],
    'setup_devops': [
      { description: 'Setup version control and branching strategy', agent: 'FileAgent', priority: 1, complexity: 'low', estimatedTime: '30min' },
      { description: 'Configure CI/CD pipeline (GitHub Actions)', agent: 'FileAgent', priority: 2, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Create Docker containers and images', agent: 'FileAgent', priority: 3, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Setup cloud infrastructure (AWS/GCP)', agent: 'FileAgent', priority: 4, complexity: 'high', estimatedTime: '4h' },
      { description: 'Configure monitoring and logging', agent: 'FileAgent', priority: 5, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Implement automated testing in pipeline', agent: 'TestAgent', priority: 6, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Setup production deployment strategy', agent: 'FileAgent', priority: 7, complexity: 'high', estimatedTime: '3h' }
    ],
    'implement_auth': [
      { description: 'Choose authentication strategy (JWT/OAuth)', agent: 'APIAgent', priority: 1, complexity: 'medium', estimatedTime: '1h' },
      { description: 'Setup user registration and login', agent: 'APIAgent', priority: 2, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Implement password hashing and security', agent: 'APIAgent', priority: 3, complexity: 'high', estimatedTime: '2h' },
      { description: 'Create role-based access control', agent: 'APIAgent', priority: 4, complexity: 'high', estimatedTime: '3h' },
      { description: 'Add session management and refresh tokens', agent: 'APIAgent', priority: 5, complexity: 'high', estimatedTime: '2h' },
      { description: 'Implement forgot password flow', agent: 'APIAgent', priority: 6, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Add security testing and audit', agent: 'TestAgent', priority: 7, complexity: 'high', estimatedTime: '2h' }
    ],
    'setup_testing': [
      { description: 'Choose testing framework and tools', agent: 'TestAgent', priority: 1, complexity: 'low', estimatedTime: '30min' },
      { description: 'Setup unit testing infrastructure', agent: 'TestAgent', priority: 2, complexity: 'medium', estimatedTime: '1h' },
      { description: 'Create integration test suite', agent: 'TestAgent', priority: 3, complexity: 'high', estimatedTime: '3h' },
      { description: 'Implement E2E testing with Cypress', agent: 'TestAgent', priority: 4, complexity: 'high', estimatedTime: '4h' },
      { description: 'Add API testing and mocking', agent: 'TestAgent', priority: 5, complexity: 'medium', estimatedTime: '2h' },
      { description: 'Setup code coverage reporting', agent: 'TestAgent', priority: 6, complexity: 'medium', estimatedTime: '1h' },
      { description: 'Create performance and load tests', agent: 'TestAgent', priority: 7, complexity: 'high', estimatedTime: '3h' }
    ]
  };

  static parseRequest(request: string): Task[] {
    const lowerRequest = request.toLowerCase().trim();
    
    // Advanced pattern matching with confidence scoring
    const patternScores = this.patterns.map(pattern => ({
      ...pattern,
      score: this.calculatePatternScore(lowerRequest, pattern.keywords) * pattern.confidence
    }));
    
    // Find best matching pattern
    const bestMatch = patternScores.reduce((best, current) => 
      current.score > best.score ? current : best
    );
    
    // Use best match if confidence is high enough, otherwise use intelligent fallback
    if (bestMatch.score > 0.3) {
      return this.generateTasksFromTemplate(bestMatch.template, request);
    } else {
      return this.generateIntelligentFallback(request);
    }
  }

  private static calculatePatternScore(request: string, keywords: string[]): number {
    const words = request.split(/\s+/);
    let score = 0;
    let matches = 0;
    
    keywords.forEach(keyword => {
      if (request.includes(keyword)) {
        matches++;
        // Boost score for exact word matches vs substrings
        if (words.includes(keyword)) {
          score += 2;
        } else {
          score += 1;
        }
      }
    });
    
    // Normalize score and add bonus for multiple matches
    const normalizedScore = Math.min(score / keywords.length, 1);
    const matchBonus = matches > 1 ? 0.2 : 0;
    
    return normalizedScore + matchBonus;
  }

  private static generateTasksFromTemplate(templateKey: string, originalRequest: string): Task[] {
    const template = this.taskTemplates[templateKey];
    if (!template) {
      return this.generateIntelligentFallback(originalRequest);
    }
    
    const tasks: Task[] = [];
    const taskDependencies: { [taskIndex: number]: number[] } = {};
    
    // Smart dependency resolution based on task types
    template.forEach((taskTemplate, index) => {
      const dependencies: number[] = [];
      
      // Add logical dependencies based on task nature
      if (index > 0) {
        if (taskTemplate.agent === 'TestAgent') {
          // Tests depend on all implementation tasks
          for (let i = 0; i < index; i++) {
            if (template[i].agent !== 'TestAgent') {
              dependencies.push(i);
            }
          }
        } else if (taskTemplate.agent === 'APIAgent' && taskTemplate.description.includes('endpoints')) {
          // API endpoints depend on models and auth
          for (let i = 0; i < index; i++) {
            if (template[i].description.includes('model') || 
                template[i].description.includes('auth') ||
                template[i].description.includes('database')) {
              dependencies.push(i);
            }
          }
        } else {
          // Default: depend on previous task
          dependencies.push(index - 1);
        }
      }
      
      taskDependencies[index] = dependencies;
    });
    
    // Generate tasks with smart dependencies
    const taskIds: string[] = [];
    template.forEach((taskTemplate, index) => {
      const taskId = this.generateId();
      taskIds.push(taskId);
      
      const dependencyIds = taskDependencies[index].map(depIndex => taskIds[depIndex]).filter(Boolean);
      
      tasks.push({
        id: taskId,
        description: taskTemplate.description,
        agent: taskTemplate.agent,
        dependencies: dependencyIds,
        status: 'pending' as const,
        priority: taskTemplate.priority
      });
    });
    
    return tasks;
  }

  private static generateIntelligentFallback(request: string): Task[] {
    // Analyze request for clues about what might be needed
    const lowerRequest = request.toLowerCase();
    const tasks: Task[] = [];
    
    // Base analysis task
    const analysisTaskId = this.generateId();
    tasks.push({
      id: analysisTaskId,
      description: `Analyze requirements: ${request}`,
      agent: 'FileAgent',
      dependencies: [],
      status: 'pending',
      priority: 1
    });
    
    // Add relevant follow-up tasks based on keywords
    if (lowerRequest.includes('build') || lowerRequest.includes('create') || lowerRequest.includes('develop')) {
      const implementTaskId = this.generateId();
      tasks.push({
        id: implementTaskId,
        description: `Implement core functionality for: ${request}`,
        agent: 'FileAgent',
        dependencies: [analysisTaskId],
        status: 'pending',
        priority: 2
      });
      
      // Add testing if it seems like a substantial development task
      if (lowerRequest.includes('app') || lowerRequest.includes('system') || lowerRequest.includes('service')) {
        tasks.push({
          id: this.generateId(),
          description: `Add testing and validation`,
          agent: 'TestAgent',
          dependencies: [implementTaskId],
          status: 'pending',
          priority: 3
        });
      }
    }
    
    return tasks;
  }

  private static generateId(): string {
    return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}