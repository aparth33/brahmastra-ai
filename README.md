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

**Thank you for reviewing Brahmastra AI!** 🚀
