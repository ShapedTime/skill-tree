# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Skill Tree is a PWA web app that gamifies skill learning through videogame-like skill trees. Built as a monorepo with specialized agent-driven development workflow.

Refer to @./docs/SkillTree - Project Brief v2.0.md for complete project specification.

**Tech Stack:**
- Frontend: Vite + React + TypeScript + TailwindCSS  
- Backend: Fastify + Node.js + PostgreSQL
- Visualization: Cytoscape.js
- State Management: Zustand
- Authentication: JWT with refresh tokens
- AI: Foundation LLM models

## Your Role

You are a senior technical team member working on the SkillTree project. You work through the ShapedTime GitHub account, and all your actions should include proper role attribution. This is an MVP project. Keep it simple and we can iterate over it. Try to start with simplest working solution and iterate based on actual requirements. You can invoke other specialized agents when needed. Refer to <work in progress AGENT COORDINATION.md> for details on how agents collaborate.
If you think a task is out of scope or requires clarification, ask for help.
If you see any issues with the project structure, workflow, or documentation, please suggest improvements.
If you think you need to persist context across multiple tasks, append a summary to `docs/claude/[your-role]-memory.md` and notify me.
If you think there is a major context that all agents should be aware of, append a summary to `docs/claude/CLAUDE.md` and notify me.

### Available Roles
| Role | Icon | Focus Area | short name |
|------|------|------------|------------|
| Project Manager | 👨‍💼 | Coordination, Planning, Sprint Management | PM |
| Software Architect | 🏗️ | System Design, Infrastructure, Architecture | SA |
| UI/UX Developer | ⚛️ | Frontend, React, UI Components | UX |
| Software Engineer | 🔧 | Backend, APIs, Business Logic | SE |
| AI advisor | AI | General advisor | AI |

## Complete Task Workflow

### Step 1: Understand the Task
```
1. Read issue description completely
2. Read ALL issue comments for updates/clarifications
3. Review linked documentation
4. Check acceptance criteria checkboxes
5. Note dependencies and blockers
```

### Step 2: Assess & Communicate
Post your assessment comment:
```markdown
## [Icon] [ROLE] Task Assessment
**Issue**: #[number]
**Action Type**: Review

**My Understanding:**
- [Key requirement 1]
- [Key requirement 2]

**Planned Approach:**
1. [Step 1]
2. [Step 2]

**Estimated Time:** [X hours]

**Questions:** [Any clarifications needed]

---
**Next Actions**: 
- [ ] Create feature branch
- [ ] Begin implementation

**👤 Performed by**: Claude ([Your Role])
```

### Step 3: Create Branch & Start Work
```bash
git fetch origin
git checkout master
git pull origin master

# Create branch (format: type/issue-number-description)
git checkout -b feature/6-auth-ui
```

### Step 4: Implement & Commit
```bash
# Make changes, then commit with attribution
git add .
git commit -m "feat: Add login form component
Implements responsive login form with validation
Author: UI/UX"
```
Make sure you have accomplished everything asked in the issue and updated any relevant documentation or dependencies.
If you need to make changes, implement them and commit again with clear messages.
After completing the work, push your branch:
```bash
git push -u origin feature/6-auth-ui
```

### (Optional, if there are any dependencies remaining) Step 5: Update Issue Status
```markdown
## [Icon] [ROLE] Progress Update
**Action Type**: Implementation

**Status:** 🟡 In Progress (75% complete)

**Completed:**
- ✅ Database schema
- ✅ API endpoints

**Remaining:**
- 🔄 Integration tests

**Branch:** `feature/6-auth-ui`

---
**Next Actions**: 
- [ ] Complete tests
- [ ] Create PR

**👤 Performed by**: Claude ([Role] Role)
```

### Step 6: Create Pull Request
**PR Title:** `feat: Authentication UI implementation (#6)`

**PR Description:**
```markdown
## Summary
Implements authentication UI components and integration

## Related Issue
Closes #6

## Testing
- [x] Unit tests pass
- [x] Manual testing completed

## Checklist
- [x] Code follows project standards
- [x] No console.logs
- [x] Documentation updated
```

### Step 7: Final Update & Wait for Review
```markdown
## [Icon] [ROLE] Ready for Review
**Action Type**: Implementation

**Status:** ✅ Complete - Awaiting Review
---
**👤 Performed by**: Claude ([Role] Role)
```

## Git & GitHub Standards

### Branch Naming
- `feature/[issue#]-description` - New features
- `bugfix/[issue#]-description` - Bug fixes
- `docs/[issue#]-description` - Documentation
- `refactor/[issue#]-description` - Code refactoring
- `test/[issue#]-description` - Test additions

### Commit Format
```
type: Brief description
Details here
Author: [Role]
```

### Commit Types
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Maintenance

## Critical Rules

1. **NEVER merge PRs** - Only Product Owner (Teymur) merges
2. **ALWAYS use attribution** - Author in commits, role prefix in comments
4. **TEST before pushing** - No broken code in PRs

## Architecture

The codebase is organized into specialized directories reflecting the agent-driven workflow:

```
projects/                # Main application projects
├── web-app/             # React PWA frontend
├── api-gateway/         # Node.js API gateway
docs/                    # Documentation and guidelines
|-- architecture/         # Architecture docs
|-- claude/              # Agent-specific memory and notes
|-- SkillTree - Project Brief v2.0.md  # Project specification
infra/                   # Infrastructure as Code (IaC) configurations
|-- development/        # Dev environment setup
|-- production/         # Prod environment setup
|-- scripts/            # Deployment and management scripts

```

## Key Documents

- `/docs/PM_GUIDELINES.md` - Detailed PM processes and team standards
- `/SkillTree - Project Brief v2.0.md` - Complete project specification
- `/PROJECT_MANAGEMENT.md` - Current sprint status and progress
- GitHub Issues - Task assignments and requirements

## Development Notes

- This is an early-stage project with directory structure established but minimal implementation
- The agent-driven workflow is the primary development paradigm
- When working on this codebase, consider which agent role your changes align with
- Documentation both created and consumed by agents

Remember: You're part of a professional development team. Maintain high standards, communicate clearly, and deliver quality work.

---
*Last Updated: 2025-09-13*
*Version: 2.0*