# BRAHMASTRA CLI - Development Setup

This is the CLI implementation of the BRAHMASTRA planning layer.

## Quick Start

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev <command>

# Test the epic battle system
npm run dev plan "Create a REST API" --execute
```

## Development Commands

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev <command>` - Run CLI in development mode
- `npm run start` - Run compiled version

## Project Structure

```
src/
├── core/
│   ├── TaskParser.ts       # Smart pattern recognition
│   ├── PlanningEngine.ts   # Plan generation & reasoning  
│   └── Orchestrator.ts     # Epic battle execution
├── agents/
│   ├── AgentPersonalities.ts # Unique warrior personalities
│   └── BaseAgent.ts        # Agent interfaces
├── battle/
│   └── BattleSimulator.ts  # Interactive battle system
├── utils/
│   └── PlanVisualizer.ts   # ASCII art & diagrams
└── index.ts                # CLI entry point
```

## Features

🎭 **Agent Personalities**: Each AI agent has unique battle personalities  
⚔️ **Battle Simulations**: Interactive ASCII battles with health/energy meters  
🎨 **Visual Planning**: Epic battle plan diagrams and flow charts  
🔍 **Drift Detection**: Verify implementations match original plans  

See main README.md for complete usage documentation.