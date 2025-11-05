# Brahmastra CLI - The Ultimate AI Agent Planning Layer

An innovative implementation inspired by Traycer's vision: The ultimate planning layer that orchestrates AI coding agents with military precision, transforming vague requests into battle-tested execution plans.

## 📋 Current State: Architectural Demonstration

This is a **proof-of-concept** that demonstrates the core architecture and user experience of an intelligent planning layer. The current implementation focuses on:
- ✅ Clean, modular architecture ready for production integration
- ✅ Intelligent task parsing with 7+ project templates
- ✅ Multi-agent orchestration with dependency management
- ✅ Rich visualizations and engaging battle-themed UX
- ✅ Simulated execution to showcase workflow coordination

**Note**: Agents currently simulate work to demonstrate the planning layer concept. The architecture is designed to integrate with real coding tools (see Future Scope below).

## Core Concept

Brahmastra acts as an intelligent orchestrator that:
1. **Parses** natural language requests from developers
2. **Plans** by breaking down complex tasks into structured, dependency-aware subtasks  
3. **Orchestrates** different specialized AI agents to execute specific parts
4. **Coordinates** the workflow to ensure proper execution order

## Architecture

```
User Request → Task Parser → Planning Engine → Orchestrator → Agents
                                   ↓
                              Progress Tracker
```

### Components

- **TaskParser**: Converts natural language into structured tasks
- **PlanningEngine**: Creates execution plans with dependencies and agent assignments
- **AgentRegistry**: Manages specialized agents and their capabilities
- **Orchestrator**: Coordinates task execution and agent workflow
- **Agents**: Specialized workers (FileAgent, APIAgent, TestAgent, DatabaseAgent)

## Installation

```bash
cd brahmastra-cli
npm install
npm run build
npm link  # Optional: for global usage
```

## Usage

### Basic Planning
```bash
cd brahmastra-cli

# Create a plan for a development task
npm run dev plan "Create a REST API for user management"

# Create and execute a plan immediately (with epic battle simulations!)
npm run dev plan "Build a web app for task tracking" --execute
```

### Interactive Mode
```bash
# Start interactive session
npm run dev interactive
```

### Meet Your AI Warriors
```bash
# See available agents with their battle personalities
npm run dev agents

# See detailed personality profiles
npm run dev agents --personalities
```

### Drift Detection
```bash
# Simulate plan verification and drift detection
npm run dev verify
```

## Example Workflows

### 1. REST API Development
```bash
brahmastra plan "Create a REST API for user management"
```
**Expected Output:**
- FileAgent: Setup project structure
- FileAgent: Create data models  
- APIAgent: Implement authentication middleware
- APIAgent: Create CRUD endpoints
- FileAgent: Add input validation
- TestAgent: Write unit tests

### 2. Web Application
```bash
brahmastra plan "Build a React dashboard with authentication"
```
**Expected Output:**
- FileAgent: Setup frontend project
- FileAgent: Create component structure
- FileAgent: Implement routing
- FileAgent: Add state management
- APIAgent: Setup authentication
- TestAgent: Add tests

## Key Features Demonstrating BRAHMASTRA's Planning Layer Concept

### 1. **Multi-Agent Orchestration**
Different agents handle their specializations:
- **FileAgent**: Project structure, models, components
- **APIAgent**: REST endpoints, authentication, middleware  
- **TestAgent**: Unit tests, integration tests
- **DatabaseAgent**: Schema, migrations, connections

### 2. **Intelligent Task Breakdown**
Natural language requests are parsed into structured, executable tasks with proper dependencies.

### 3. **Dependency Management**
Tasks are automatically sequenced based on dependencies (e.g., "Create models" before "Create endpoints").

### 4. **Progress Tracking**
Real-time execution monitoring with clear status updates.

## Project Structure

```
src/
├── core/
│   ├── TaskParser.ts       # Converts requests to tasks
│   ├── PlanningEngine.ts   # Creates execution plans
│   └── Orchestrator.ts     # Manages execution
├── agents/
│   ├── BaseAgent.ts        # Agent interface
│   ├── FileAgent.ts        # File operations
│   ├── APIAgent.ts         # API development
│   ├── TestAgent.ts        # Test creation
│   ├── DatabaseAgent.ts    # Database operations
│   └── AgentRegistry.ts    # Agent management
├── types/
│   └── index.ts            # TypeScript definitions
└── index.ts                # CLI entry point
```

## Technical Highlights

- **TypeScript**: Full type safety and modern language features
- **Commander.js**: Robust CLI framework
- **Chalk**: Colorized console output
- **Inquirer**: Interactive prompts
- **Modular Architecture**: Easy to extend with new agents
- **Dependency Resolution**: Automatic task sequencing
- **Simulated Execution**: Demonstrates agent coordination

## Why This Demonstrates the BRAHMASTRA Vision (Inspired by Traycer)

1. **Planning Layer**: Takes high-level requests and creates detailed execution plans
2. **Agent Coordination**: Orchestrates different specialized agents
3. **Intelligent Breakdown**: Automatically identifies subtasks and dependencies
4. **Extensible**: Easy to add new agents and capabilities
5. **User-Friendly**: Clear visual feedback and interactive experience

This implementation captures the essence of intelligent planning: making complex development workflows manageable through military-precision orchestration and agent coordination, inspired by the revolutionary Traycer approach.

---

## 🚀 Future Scope: Production Enhancement Roadmap

The current architecture is designed to support the following production-ready enhancements:

### Phase 1: Real Execution Capabilities

#### **1.1 File-Level Planning (Traycer-Style)**
Transform generic tasks into specific file operations:
```typescript
// Current: "Setup project structure"
// Future:
{
  filePath: "src/models/User.ts",
  action: "create",
  content: "User interface with authentication fields",
  dependencies: ["src/types/index.ts"]
}
```

**Benefits:**
- Precise, actionable plans instead of abstract tasks
- Clear expectations for downstream agents
- Easy verification of completed work

#### **1.2 Real Agent Execution**
Integrate agents with actual development tools:

- **FileAgent**: Use `fs/promises` to create actual files and directories
  - Write TypeScript interfaces, classes, and components
  - Generate boilerplate code from templates
  - Manage project structure

- **APIAgent**: Generate working REST endpoints
  - Create Express.js routes with proper middleware
  - Implement authentication logic (JWT, OAuth)
  - Add request validation and error handling

- **TestAgent**: Write executable test suites
  - Generate Jest/Vitest test files
  - Create unit tests for functions
  - Add integration tests for APIs

- **DatabaseAgent**: Execute database operations
  - Generate Prisma/TypeORM schemas
  - Create migration files
  - Set up seed data

**Implementation Approach:**
```typescript
abstract class BaseAgent {
  abstract async execute(task: FileModificationTask): Promise<ExecutionResult>;

  protected async readFile(path: string): Promise<string>;
  protected async writeFile(path: string, content: string): Promise<void>;
  protected async applyCodemod(ast: AST, transformation: Transform): Promise<void>;
}
```

### Phase 2: AI-Powered Intelligence

#### **2.1 LLM Integration for Natural Language Understanding**
Replace pattern matching with true AI comprehension:

**Current Limitation:** Only handles 7 predefined patterns (REST API, Web App, etc.)

**Future Enhancement:**
```typescript
import Anthropic from '@anthropic-ai/sdk';

async function createIntelligentPlan(userRequest: string): Promise<Plan> {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const systemPrompt = `You are a planning layer for coding agents.
  Break down requests into 5-8 file-specific tasks with dependencies.`;

  const response = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    messages: [{ role: 'user', content: userRequest }]
  });

  return parseAIPlan(response);
}
```

**Benefits:**
- Handle ANY development request, not just templates
- Understand context and nuance
- Adapt to user feedback and refinement
- Learn from execution history

**Supported Models:**
- Claude (Anthropic) - Best for code reasoning
- GPT-4 (OpenAI) - Strong general understanding
- Gemini (Google) - Multi-modal capabilities
- Local LLMs (Ollama) - Privacy-focused deployments

#### **2.2 Codebase Context Awareness**
Analyze existing projects before planning:

```typescript
interface CodebaseContext {
  framework: 'Express' | 'NestJS' | 'Next.js' | 'React' | null;
  language: 'TypeScript' | 'JavaScript';
  testFramework: 'Jest' | 'Vitest' | 'Mocha' | null;
  database: 'PostgreSQL' | 'MongoDB' | 'MySQL' | null;
  existingFiles: string[];
  dependencies: Record<string, string>;
  conventions: {
    importStyle: 'ESM' | 'CommonJS';
    quotation: 'single' | 'double';
    semicolons: boolean;
  };
}

async function analyzeCodebase(projectPath: string): Promise<CodebaseContext> {
  // Read package.json
  // Scan for config files (tsconfig, jest.config, etc.)
  // Analyze file structure
  // Detect patterns and conventions
}
```

**Planning Integration:**
```typescript
// Instead of generic "Setup Express project"
// Context-aware: "I see you're using NestJS with Prisma. I'll create
// a new module following your existing controller/service/repository pattern."
```

### Phase 3: Advanced Planning Features

#### **3.1 Mermaid Diagram Generation**
Visual representation of execution plans (Traycer-style):

```typescript
generateMermaidDiagram(plan: ExecutionPlan): string {
  return `
graph TD
    A[src/models/User.ts] --> B[src/controllers/auth.ts]
    A --> C[src/services/user.ts]
    B --> D[src/routes/auth.ts]
    C --> D
    D --> E[tests/auth.test.ts]

    style A fill:#e1f5ff,stroke:#01579b
    style D fill:#f3e5f5,stroke:#4a148c
    style E fill:#e8f5e9,stroke:#1b5e20
  `;
}
```

**Export Options:**
- Display in terminal using ASCII art
- Save as `.md` file with Mermaid code blocks
- Generate PNG/SVG via Mermaid CLI
- Embed in web dashboard

#### **3.2 Real Drift Detection & Verification**
Compare planned vs. actual implementation:

```typescript
interface DriftAnalysis {
  missingFiles: string[];           // Planned but not created
  unexpectedFiles: string[];        // Created but not planned
  incompleteImplementations: {      // Partially implemented
    file: string;
    expectedFunctions: string[];
    missingFunctions: string[];
  }[];
  qualityIssues: {                  // Code quality problems
    file: string;
    issue: 'no-tests' | 'no-error-handling' | 'missing-types';
    severity: 'high' | 'medium' | 'low';
  }[];
}

async function verifyExecution(plan: ExecutionPlan): Promise<DriftAnalysis> {
  // Use AST parsing to analyze generated code
  // Compare against plan expectations
  // Check for anti-patterns and missing best practices
}
```

**Verification Techniques:**
- AST (Abstract Syntax Tree) parsing with `@babel/parser`
- TypeScript type checking via `ts-morph`
- Static analysis with ESLint rules
- Git diff analysis for change tracking

#### **3.3 Interactive Plan Refinement**
Allow users to review and modify plans before execution:

```typescript
async function refinePlan(initialPlan: ExecutionPlan): Promise<ExecutionPlan> {
  const modifications = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'tasksToKeep',
      message: 'Select tasks to include:',
      choices: initialPlan.tasks.map(t => ({
        name: `[${t.agent}] ${t.description}`,
        value: t.id,
        checked: true
      }))
    },
    {
      type: 'confirm',
      name: 'addErrorHandling',
      message: 'Add comprehensive error handling?',
      default: true
    },
    {
      type: 'list',
      name: 'testCoverage',
      message: 'Test coverage level:',
      choices: ['Basic', 'Comprehensive', 'None']
    }
  ]);

  return applyModifications(initialPlan, modifications);
}
```

### Phase 4: Advanced Orchestration

#### **4.1 Parallel Task Execution**
Execute independent tasks simultaneously:

```typescript
interface DependencyGraph {
  nodes: Task[];
  edges: [taskId: string, dependsOn: string][];
}

function groupByExecutionLevel(graph: DependencyGraph): Task[][] {
  // Topological sort with level assignment
  // Tasks at same level can run in parallel
}

async function executeParallel(plan: ExecutionPlan): Promise<void> {
  const levels = groupByExecutionLevel(plan.dependencyGraph);

  for (const [levelIndex, tasks] of levels.entries()) {
    console.log(`⚡ Wave ${levelIndex + 1}: ${tasks.length} tasks in parallel`);

    await Promise.all(
      tasks.map(task => executeWithProgress(task))
    );
  }
}
```

**Performance Benefits:**
- 3-5x faster execution for independent tasks
- Better resource utilization
- Clear visualization of parallel operations

#### **4.2 Smart Agent Selection**
Let multiple agents compete for tasks:

```typescript
interface AgentBid {
  agent: Agent;
  confidence: number;  // 0-1 score
  reasoning: string;
  estimatedTime: number;
}

async function selectBestAgent(task: Task): Promise<Agent> {
  const bids = await Promise.all(
    agents.map(agent => agent.bidOnTask(task))
  );

  // Select agent with highest confidence
  const winner = bids.sort((a, b) => b.confidence - a.confidence)[0];

  console.log(`🏆 ${winner.agent.name} selected (${winner.confidence}% confidence)`);
  console.log(`   Reasoning: ${winner.reasoning}`);

  return winner.agent;
}
```

#### **4.3 Learning System**
Improve planning accuracy over time:

```typescript
interface ExecutionHistory {
  planId: string;
  pattern: string;
  success: boolean;
  actualDuration: number;
  estimatedDuration: number;
  failures: string[];
  timestamp: Date;
}

class LearningEngine {
  async adjustConfidence(pattern: string): Promise<number> {
    const history = await this.getHistoryForPattern(pattern);
    const successRate = history.filter(h => h.success).length / history.length;

    return 0.5 + (successRate * 0.5); // 50-100% confidence
  }

  async predictDuration(task: Task): Promise<number> {
    const similar = await this.findSimilarTasks(task);
    const avgDuration = similar.reduce((sum, t) => sum + t.actualDuration, 0) / similar.length;

    return avgDuration * 1.2; // Add 20% buffer
  }
}
```

### Phase 5: Integration & Ecosystem

#### **5.1 Integration with Real AI Agents**
Export plans for existing coding tools:

**Cursor Integration:**
```typescript
brahmastra plan "Add user auth" --export cursor

// Generates .cursor/instructions.md
// Each task becomes a Cursor command with context
```

**Claude Code Integration:**
```json
{
  "tasks": [
    {
      "instruction": "Create src/models/User.ts",
      "context_files": ["src/types/index.ts"],
      "validation": "Must have email and password fields"
    }
  ]
}
```

**Windsurf / Cody / GitHub Copilot Workspace:**
- Generate structured task lists
- Provide context for each step
- Enable handoff to preferred agent

#### **5.2 CI/CD Pipeline Generation**
Convert plans to GitHub Actions workflows:

```typescript
brahmastra plan "Setup deployment pipeline" --export github-actions

// Generates .github/workflows/deploy.yml
```

```yaml
name: Brahmastra Execution Plan
on: [push]
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - name: Setup project structure
        run: npm run setup

  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - name: Build application
        run: npm run build
```

#### **5.3 VS Code Extension**
Native IDE integration:

```typescript
// Command palette
"Brahmastra: Plan from Selection"  // Analyze highlighted code
"Brahmastra: Generate Test Plan"   // Create test strategy
"Brahmastra: Refactor Plan"        // Plan code improvements

// Features:
- Inline plan visualization
- Task execution progress in sidebar
- Drift detection on file save
- Agent selection suggestions
```

#### **5.4 Web Dashboard**
Visual interface for plan management:

**Features:**
- Drag-and-drop task reordering
- Interactive Mermaid diagrams
- Real-time execution monitoring
- Plan history and versioning
- Team collaboration (share plans)
- Analytics (success rates, bottlenecks)

**Tech Stack:**
- React + TypeScript
- Mermaid.js for diagrams
- WebSocket for live updates
- IndexedDB for local storage

### Phase 6: Enterprise Features

#### **6.1 Multi-Project Orchestration**
Coordinate changes across microservices:

```typescript
brahmastra plan "Add payment feature to checkout service and update gateway"

// Generates coordinated plans for multiple repositories
// Ensures API contract compatibility
// Sequences deployments correctly
```

#### **6.2 Team Collaboration**
Share and review plans:

```typescript
interface TeamPlan {
  author: string;
  reviewers: string[];
  status: 'draft' | 'in-review' | 'approved' | 'executing';
  comments: Comment[];
}

// Workflow:
brahmastra plan "Feature X" --draft
brahmastra review plan_123 --approve
brahmastra execute plan_123
```

#### **6.3 Cost Estimation**
Predict resource usage:

```typescript
interface CostEstimate {
  llmTokens: number;
  estimatedCost: number;  // API usage
  developerTime: number;  // Hours saved
  complexity: 'low' | 'medium' | 'high';
  risks: string[];
}
```

#### **6.4 Compliance & Governance**
Enforce organizational standards:

```typescript
interface GovernanceRules {
  requiredTests: 'unit' | 'integration' | 'e2e';
  minCoverage: number;
  requiredReviews: number;
  securityScans: boolean;
  architecturePatterns: string[];
}

// Automatically reject plans that don't meet standards
```

### Phase 7: Advanced Intelligence

#### **7.1 Multi-Agent Communication**
Let agents coordinate autonomously:

```typescript
// APIAgent to DatabaseAgent:
"I need a User table with email and hashed password"

// DatabaseAgent response:
"Created User model with bcrypt hashing. Migration ready."

// APIAgent continues:
"Thanks, implementing /register endpoint using your User model"
```

#### **7.2 Self-Healing Plans**
Automatically recover from failures:

```typescript
async function executeSelfHealing(plan: ExecutionPlan): Promise<void> {
  for (const task of plan.tasks) {
    const result = await executeWithRetry(task, {
      maxAttempts: 3,
      onFailure: async (error) => {
        // Analyze error
        const fix = await llm.suggestFix(error);

        // Modify task
        task.approach = fix.newApproach;

        // Retry
        return executeTask(task);
      }
    });
  }
}
```

#### **7.3 Cross-Language Support**
Plan projects in multiple languages:

```typescript
// Currently: TypeScript only
// Future: Python, Go, Rust, Java, etc.

const languageAgents = {
  typescript: new TypeScriptAgent(),
  python: new PythonAgent(),
  go: new GoAgent(),
  rust: new RustAgent()
};
```

---

## 🎯 Implementation Priority

**Immediate (Next 2-4 weeks):**
1. ✅ File-level planning with actual file paths
2. ✅ Real file operations (create, read, modify)
3. ✅ LLM integration for natural language understanding
4. ✅ Codebase analysis (read existing project structure)

**Short-term (1-2 months):**
5. ✅ Mermaid diagram generation
6. ✅ Real drift detection with AST analysis
7. ✅ Parallel task execution
8. ✅ Interactive plan refinement

**Medium-term (3-6 months):**
9. ✅ Integration with Cursor/Claude Code/Windsurf
10. ✅ VS Code extension
11. ✅ Learning system for confidence adjustment
12. ✅ Web dashboard

**Long-term (6-12 months):**
13. ✅ Team collaboration features
14. ✅ Multi-project orchestration
15. ✅ Self-healing execution
16. ✅ Cross-language support

---

## 🏗️ Why This Architecture Supports Future Enhancements

The current codebase is designed for extensibility:

1. **Abstract Base Classes**: `BaseAgent` makes adding real execution trivial
2. **Plugin Pattern**: `AgentRegistry` supports dynamic agent loading
3. **Typed Interfaces**: Strong TypeScript types prevent breaking changes
4. **Modular Core**: Planning, parsing, and orchestration are decoupled
5. **Template System**: Easy to add new project patterns
6. **Extensible Types**: All interfaces designed for future properties

**Example: Adding LLM Integration**
```typescript
// Current PlanningEngine
static createPlan(request: string): PlanningResult {
  return TaskParser.parseRequest(request);
}

// Future: Drop-in replacement
static async createPlan(request: string): Promise<PlanningResult> {
  if (process.env.USE_LLM) {
    return await this.createPlanWithAI(request);
  }
  return TaskParser.parseRequest(request); // Fallback
}
```

No breaking changes required!

---

## 📚 Related Technologies & Inspirations

- **Traycer AI**: Spec-driven development with planning-first approach
- **Devin AI**: Autonomous AI software engineer
- **GitHub Copilot Workspace**: Task planning for code changes
- **AutoGPT**: Autonomous AI agents with task decomposition
- **LangChain Agents**: Multi-agent orchestration framework
- **Cursor Composer**: Multi-file code generation
- **Windsurf Cascade**: Multi-step AI coding workflows

---

## 💡 Contributing to Future Development

This project is designed to evolve. Potential contribution areas:

1. **New Agents**: Implement specialized agents (DockerAgent, CloudAgent, etc.)
2. **Pattern Templates**: Add support for more project types
3. **LLM Providers**: Integrate additional AI models
4. **Visualizations**: Enhance ASCII art or add GUI
5. **Real Execution**: Implement actual file/code operations
6. **Testing**: Expand test coverage and add integration tests

---

**Note**: This roadmap demonstrates understanding of production requirements while maintaining the creative battle-themed UX that makes Brahmastra unique. The current architecture is intentionally designed to support all these enhancements without major refactoring.