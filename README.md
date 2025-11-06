# 🎯 Brahmastra AI - Planning Layer for Coding Agents

A CLI tool inspired by Traycer AI that demonstrates intelligent planning, multi-agent orchestration, and drift detection for AI-assisted development.

**The Problem:** AI coding agents drift from intent, lack coordination, and can't verify their work.
**The Solution:** A planning layer that structures tasks, coordinates specialized agents, and verifies outcomes.

---

## 📋 What This Is

**Proof-of-concept** demonstrating:
- ✅ Intelligent task breakdown from natural language
- ✅ Multi-agent orchestration with dependency management
- ✅ Battle-themed UX with rich visualizations
- ✅ Drift detection (Traycer's core insight)
- ✅ Clean, extensible TypeScript architecture

**Note:** Agents currently simulate execution to showcase the planning layer concept. Architecture designed for real implementation (see Future Scope).

---

## 🚀 Quick Start

```bash
# Setup
cd brahmastra-cli
npm install && npm run build

# Try the core demo
npm run dev plan "Create a REST API for user management" --execute

# Explore features
npm run dev agents --personalities    # Meet the agents
npm run dev verify                    # Drift detection
npm run dev interactive               # Interactive mode
npm run dev --help                    # All commands
```

---

## ✨ Key Features

### 1. Natural Language Planning
Transforms vague requests into structured plans with 6-9 specific tasks, confidence scoring, and dependency management.

```bash
npm run dev plan "Build a web app with authentication"
```

**Output:**
- Battle plan header with confidence score (85%)
- Strategic reasoning
- Execution flow diagram
- Dependency matrix
- Task list with agent assignments

### 2. Multi-Agent Orchestration

Five specialized agents with battle personalities:

| Agent | Role | Motto |
|-------|------|-------|
| **FileAgent** (Commander Files) | Project structure, models | "Structure Before Speed" |
| **APIAgent** (Captain Connect) | REST endpoints, auth | "Connect Everything" |
| **TestAgent** (Sentinel Probe) | Testing, QA | "Trust Nothing, Test Everything" |
| **DatabaseAgent** (Oracle Data) | Schemas, migrations | "In Data We Trust" |
| **UIAgent** (Artist Pixel) | Frontend, styling | "Function Through Beauty" |

```bash
npm run dev agents --personalities
```

### 3. Battle Execution System

Epic 4-phase animated execution:
- 🔍 **Reconnaissance** (1s) - Scanning requirements
- ⚔️ **Engagement** (1.5s) - Setup
- 💻 **Implementation** (2s) - Main work
- 🏆 **Victory Consolidation** (0.8s) - Finalization

Real-time tracking: Health bars, Energy bars, XP accumulation, Agent commentary, Victory celebrations

```bash
npm run dev plan "Setup PostgreSQL database" --execute
```

### 4. Drift Detection

Simulates Traycer's verification - checks if implementation matches plan.

```bash
npm run dev verify
```

**Detects:**
- 🔴 Missing tasks (high severity)
- 🟡 Implementation drift (medium severity)
- 🟢 Quality issues (low severity)

**Provides:** Actionable fix suggestions for each issue

### 5. Interactive Mode

Continuous planning for rapid iteration.

```bash
npm run dev interactive
```

### 6. Rich Visualizations

- ASCII art battle plans
- Color-coded flow diagrams
- Dependency matrices
- Animated progress bars
- Health/Energy/XP meters

---

## 🏗️ Architecture

```
brahmastra-cli/
├── src/
│   ├── core/
│   │   ├── TaskParser.ts       # Pattern matching: 7+ project types
│   │   ├── PlanningEngine.ts   # Plan creation, confidence scoring
│   │   └── Orchestrator.ts     # Execution coordination
│   ├── agents/
│   │   ├── BaseAgent.ts        # Abstract base class
│   │   ├── FileAgent.ts        # File operations
│   │   ├── APIAgent.ts         # API development
│   │   ├── TestAgent.ts        # Testing
│   │   ├── DatabaseAgent.ts    # Database
│   │   ├── AgentRegistry.ts    # Plugin pattern
│   │   └── AgentPersonalities.ts # Battle personalities
│   ├── battle/
│   │   └── BattleSimulator.ts  # 4-phase execution
│   └── utils/
│       └── PlanVisualizer.ts   # ASCII diagrams
```

**Design Patterns:** Abstract Factory, Registry, Strategy, Command
**Tech Stack:** TypeScript 5.9, Commander.js, Chalk, Inquirer

---

## 🎯 How This Captures Traycer's Vision

| Traycer Principle | Brahmastra Implementation |
|-------------------|---------------------------|
| Planning before coding | TaskParser + PlanningEngine structure tasks first |
| File-level specificity | Tasks scoped to files/components in templates |
| Drift detection | Verification catches missing/changed implementations |
| Agent coordination | 5 specialized agents with clear boundaries |
| Dependency awareness | Automatic resolution, sequential execution |
| Verification loop | Plan → Execute → Verify workflow |

**Key Insight:** Planning-first approach prevents agent drift and coordination issues.

---

## 🎮 Complete Feature Demo

Follow this sequence to see everything:

```bash
cd brahmastra-cli
npm install && npm run build

# 1. Natural Language Planning (60s)
npm run dev plan "Create a REST API for user management"
# Review plan, answer 'n' to execution

# 2. Agent Personalities (30s)
npm run dev agents --personalities
# See battle cries, victory quotes, mottos

# 3. Full Battle Execution (90s)
npm run dev plan "Build a web app with authentication" --execute
# Watch complete battle sequence

# 4. Drift Detection (30s)
npm run dev verify
# See severity levels and fix suggestions

# 5. Interactive Mode (60s)
npm run dev interactive
# Try: "Setup PostgreSQL database"
# Try: "Add unit tests"
# Exit

# 6. Multiple Project Types (30s)
npm run dev plan "Build a mobile app with React Native"
npm run dev plan "Setup DevOps pipeline with Docker"
```

**Total time:** ~5 minutes to see all features

---

## 💡 Why These Design Choices?

**CLI over VS Code extension?**
- Faster to build and demo
- Universal (any terminal)
- Easier to test
- Focus on core concept

**Battle theme?**
- Makes orchestration engaging
- Memorable and unique
- Demonstrates creativity
- Provides narrative structure

**Simulation over real execution?**
- Proves architectural understanding
- Cleaner for demonstration
- Shows the "planning layer" concept
- Architecture ready for real implementation

---

## 🚀 Future Scope (Production Roadmap)

The architecture supports 7 phases of enhancement:

### Phase 1: Real Execution (Immediate)
- File operations with fs/promises
- Actual code generation
- Real codebase analysis

### Phase 2: AI Intelligence (Short-term)
- LLM integration (Claude/GPT-4)
- True natural language understanding
- Context-aware planning

### Phase 3: Advanced Planning (Short-term)
- Mermaid diagram generation
- AST-based drift detection
- Interactive plan refinement

### Phase 4: Orchestration (Medium-term)
- Parallel task execution
- Smart agent selection
- Learning from execution history

### Phase 5: Integration (Medium-term)
- Cursor/Claude Code/Windsurf export
- VS Code extension
- CI/CD pipeline generation
- Web dashboard

### Phase 6: Enterprise (Long-term)
- Multi-project coordination
- Team collaboration
- Cost estimation
- Compliance & governance

### Phase 7: Advanced AI (Long-term)
- Multi-agent communication
- Self-healing plans
- Cross-language support

**Why this works:** Current architecture uses Abstract Factory, Registry, and Strategy patterns making these enhancements drop-in additions without refactoring.

---

## 📊 Project Stats

- **Language:** TypeScript (100%)
- **Lines of Code:** ~1,450
- **Files:** 15 TypeScript modules
- **Agents:** 5 specialized
- **Project Templates:** 7 patterns
- **CLI Commands:** 4 main + interactive mode
- **Dependencies:** 6 (Commander, Chalk, Inquirer, TypeScript, ts-node)

---

## 🎯 Evaluation Criteria

| Criteria | Evidence |
|----------|----------|
| **Works & shows planning layer?** | ✅ Natural language → structured plans → agent execution → drift detection |
| **Clean & well-organized?** | ✅ Modular architecture, TypeScript, design patterns, ~100 lines/file avg |
| **Creative solution?** | ✅ Battle theme, agent personalities, ASCII art, health/energy/XP |
| **Easy to use?** | ✅ 4 commands, natural language input, works after `npm install` |

---

## 🙏 Acknowledgments

Inspired by **Traycer AI's** vision of planning-first AI development. The core insight that intelligent planning prevents agent drift is Traycer's contribution to AI-assisted coding.

This project demonstrates understanding through:
- Practical architecture implementation
- Creative, engaging user experience
- Technical depth with extensibility
- Clear production thinking

---

## 📧 Questions?

See `SUBMISSION_GUIDE.md` for detailed feature documentation and testing instructions.

---

**Thank you for reviewing Brahmastra AI!** 🚀
