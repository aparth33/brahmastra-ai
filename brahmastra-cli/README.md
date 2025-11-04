# Brahmastra CLI - The Ultimate AI Agent Planning Layer

An innovative implementation inspired by Traycer's vision: The ultimate planning layer that orchestrates AI coding agents with military precision, transforming vague requests into battle-tested execution plans.

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
npm install
npm run build
npm link  # Optional: for global usage
```

## Usage

### Basic Planning
```bash
# Create a plan for a development task
npm run dev plan "Create a REST API for user management"

# Create and execute a plan immediately
npm run dev plan "Build a web app for task tracking" --execute
```

### Interactive Mode
```bash
# Start interactive session
npm run dev interactive
```

### List Available Agents
```bash
# See what agents are available
npm run dev agents
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