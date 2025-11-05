le# 🎯 Brahmastra AI

**Brahmastra AI** is a planning layer inspired by Traycer that sits above coding agents to:
- Transform vague requests into structured task plans
- Orchestrate specialized agents with dependency management
- Detect drift between planned and actual implementation

**The Problem:** AI agents drift from intent, lack coordination, and can't verify their work.
**The Solution:** A planning layer that coordinates everything before execution - just like Traycer.

---

## 🚀 Quick Start

```bash
cd brahmastra-cli
npm install && npm run build

# Test the core features:
npm run dev plan "Create a REST API for user management" --execute
npm run dev agents --personalities
npm run dev verify
```

---

## ✨ Key Features

### 1. Natural Language Planning
Converts "Build a REST API" into 6-9 structured tasks with confidence scoring (85%), dependencies, and agent assignments.

```bash
npm run dev plan "Create a REST API for user management"
```

### 2. Multi-Agent Orchestration
Five specialized agents (File, API, Test, Database, UI) with battle personalities and unique capabilities.

```bash
npm run dev agents --personalities
```

### 3. Dependency Management
Visual execution flow diagrams and dependency matrices ensure proper task ordering.

### 4. Battle Execution System
Animated progress tracking through 4 phases: Reconnaissance → Engagement → Implementation → Victory. Real-time health/energy/XP bars make orchestration engaging.

```bash
npm run dev plan "Build a web app" --execute
```

### 5. Drift Detection (Traycer's Core Concept)
Verifies implementation matches plan. Catches missing tasks, implementation drift, quality issues with severity levels and actionable fixes.

```bash
npm run dev verify
```

### 6. Interactive Mode
Rapid iteration - create multiple plans, compare approaches, execute when ready.

```bash
npm run dev interactive
```

---

## 🏗️ Technical Architecture

**Clean TypeScript with proper separation of concerns:**

```
core/          # TaskParser, PlanningEngine, Orchestrator
agents/        # BaseAgent (abstract), 5 specialized agents, Registry pattern
battle/        # BattleSimulator with 4-phase execution
utils/         # PlanVisualizer for ASCII diagrams
```

