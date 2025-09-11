# Skill Tree - Gamify Skill Gain

## Overview
Skill Tree is a PWA web app that builds users a skill tree like in videogames to help gamify the experience of learning a skill. Skill Tree is built using a customized foundational LLM model. User can have several skill trees in the app according to what they are trying to achieve. Skill trees can branch into multiple directions and some of them can overlap with other skill trees which are relevant. This skill tree can be customized by user and model adjusts the skill tree according to this. This skill tree can be made into mind map note taking to further enable productivity. In future this skill tree can receive user preferences towards learning experience and skills to further adjust skill trees of the user.

This is a monorepo containing all Skill Tree components.

## Tech Stack
- **Frontend**: React PWA
- **Backend**: Node.js + Go microservices  
- **Database**: PostgreSQL
- **AI**: Foundation LLM models

## Agent Architecture

### Agent Types
- **PM** - Product Manager: Requirements, roadmaps, sprint planning
- **Designer** - Product Designer: User research, wireframes, design systems
- **UI/UX Dev** - UI/UX Developer: Component implementation, styling, interactions
- **Architect** - Software Architect: System design, API specs, data models
- **Engineer** - Software Engineer: Backend services, database, integrations

### Workflow
1. Sequential handoffs with human oversight
2. Persistent context per sprint
3. Both creates documentation and uses predefined specs

## Project Structure

```
projects/                 # Main application projects
├── web-app/             # React PWA frontend
├── api-gateway/         # Node.js API gateway
└── ai-service/          # Go-based AI/LLM service

shared/                   # Shared resources
├── docs/                # Cross-project documentation
├── schemas/             # API schemas, data models
└── assets/              # Shared images, icons, etc.

workflows/                # Agent workflow definitions
sprints/                 # Sprint-specific contexts and artifacts
infrastructure/          # DevOps, deployment configs
docs/                    # Project documentation
```