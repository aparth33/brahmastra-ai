# 🎯 Brahmastra CLI

A planning layer for AI coding agents inspired by Traycer AI. Transforms vague requests into structured, executable plans with multi-agent orchestration and drift detection.

---

## 🚀 Quick Start

```bash
npm install && npm run build

# Try it out
npm run dev plan "Create a REST API for user management" --execute
npm run dev agents --personalities
npm run dev verify
```

---

## 📋 Commands

```bash
npm run dev plan "<request>"          # Create execution plan
npm run dev plan "<request>" --execute # Plan + execute immediately
npm run dev agents                     # List all agents
npm run dev agents --personalities     # Show battle personalities
npm run dev verify                     # Simulate drift detection
npm run dev interactive                # Interactive planning mode
```

---

## ✨ What It Does

- **🧠 Natural Language Planning** - "Build a REST API" → 6-9 structured tasks
- **⚔️ Multi-Agent Orchestration** - 5 specialized agents with battle personalities
- **📊 Dependency Management** - Visual flow diagrams and execution order
- **🎮 Battle Execution** - 4-phase animated progress (Reconnaissance → Engagement → Implementation → Victory)
- **🔍 Drift Detection** - Verifies implementation matches plan (Traycer's core concept)
- **🎨 Rich Visualizations** - ASCII art, progress bars, health/energy/XP tracking

---

## 🏗️ Architecture

```
src/
├── core/          TaskParser, PlanningEngine, Orchestrator
├── agents/        BaseAgent (abstract), 5 specialized agents, AgentRegistry
├── battle/        BattleSimulator with 4-phase execution
└── utils/         PlanVisualizer for ASCII diagrams
```

**Patterns:** Abstract Factory, Registry, Strategy, Command
**Stack:** TypeScript, Commander.js, Chalk, Inquirer

---

## 📚 Documentation

See `/README.md` in project root for:
- Complete feature documentation
- Traycer vision alignment
- Production enhancement roadmap (7 phases)
- Architecture deep-dive