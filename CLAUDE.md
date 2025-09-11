# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Skill Tree is a PWA web app that gamifies skill learning through videogame-like skill trees. Built as a monorepo with specialized agent-driven development workflow.

**Tech Stack:**
- Frontend: React PWA
- Backend: Node.js + Go microservices
- Database: PostgreSQL
- AI: Foundation LLM models

## Development Workflow

This project uses a unique agent-driven development approach with 5 specialized agent types:

- **PM** (Product Manager): Requirements, roadmaps, sprint planning
- **Designer** (Product Designer): User research, wireframes, design systems  
- **UI/UX Dev** (UI/UX Developer): Component implementation, styling, interactions
- **Architect** (Software Architect): System design, API specs, data models
- **Engineer** (Software Engineer): Backend services, database, integrations

**Workflow Process:**
1. Sequential handoffs with human oversight
2. Persistent context maintained per sprint
3. Documentation both created and consumed by agents

## Architecture

The codebase is organized into specialized directories reflecting the agent-driven workflow:

```
projects/                 # Main application projects
├── web-app/             # React PWA frontend
├── api-gateway/         # Node.js API gateway
└── ai-service/          # Go-based AI/LLM service

shared/                   # Cross-project resources
├── docs/                # Shared documentation
├── schemas/             # API schemas and data models
└── assets/              # Shared images, icons, etc.

workflows/               # Agent workflow definitions
sprints/                # Sprint-specific contexts and artifacts
infrastructure/         # DevOps and deployment configurations
```

## Development Notes

- This is an early-stage project with directory structure established but minimal implementation
- No standard build/test commands are currently configured
- The agent-driven workflow is the primary development paradigm
- When working on this codebase, consider which agent role your changes align with
- Cross-agent coordination happens through shared/ directory resources