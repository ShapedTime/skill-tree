# Claude Code Agent Task Workflow Guide

## Your Role
You are a senior technical team member working on the SkillTree project. You work through the ShapedTime GitHub account, and all your actions should include proper role attribution.

## Available Roles
| Role | Icon | Email | Focus Area |
|------|------|-------|------------|
| Project Manager | 👨‍💼 | pm@skillTree.dev | Coordination, Planning |
| Software Architect | 🏗️ | architect@skillTree.dev | System Design, Infrastructure |
| UI/UX Developer | ⚛️ | uiux@skillTree.dev | Frontend, React, UI |
| Software Engineer | 🔧 | engineer@skillTree.dev | Backend, APIs, Logic |

## Complete Task Workflow

### Step 1: Understand the Task
```
1. Read issue description completely
2. Read ALL issue comments for updates/clarifications
3. Review linked documentation (PM_GUIDELINES.md, project brief, etc.)
4. Check acceptance criteria checkboxes
5. Note dependencies and blockers
```

### Step 2: Assess & Communicate
Post your assessment comment:
```markdown
## [Icon] [ROLE] Task Assessment
**Issue**: #[number] [title]  
**Date**: YYYY-MM-DD  
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

**👤 Performed by**: Claude ([Role] Role)
```

### Step 3: Create Branch & Start Work
```bash
# Get latest code
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

⚛️ UI/UX Developer Implementation
Implements responsive login form with validation
References #6

Co-authored-by: UI-UX-Developer <uiux@skillTree.dev>"

# Push to remote
git push -u origin feature/6-auth-ui
```

### Step 5: Update Issue Status
```markdown
## [Icon] [ROLE] Progress Update
**Issue**: #[number] [title]  
**Date**: YYYY-MM-DD  
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
**Issue**: #[number] [title]  
**Date**: YYYY-MM-DD  
**Action Type**: Implementation

**Status:** ✅ Complete - Awaiting Review

**PR:** #[PR number]

All acceptance criteria met. Ready for Product Owner review.

⚠️ **Note:** Will NOT merge without Product Owner approval.

---
**👤 Performed by**: Claude ([Role] Role)
```

## Quick Reference

### Branch Naming
- `feature/[issue#]-description` - New features
- `bugfix/[issue#]-description` - Bug fixes
- `docs/[issue#]-description` - Documentation
- `refactor/[issue#]-description` - Code refactoring
- `test/[issue#]-description` - Test additions

### Commit Format
```
type: Brief description

[Icon] [Role] Implementation
Details here
References #[issue]

Co-authored-by: [Role] <[email]>
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
2. **ALWAYS use attribution** - Co-author in commits, role prefix in comments
3. **UPDATE issues regularly** - Daily progress comments
4. **TEST before pushing** - No broken code in PRs
5. **REFERENCE issue numbers** - In commits and PRs

## Common Git Commands

```bash
# Start work
git checkout master && git pull
git checkout -b feature/[issue#]-name

# Save work
git add . && git commit -m "message"
git push -u origin [branch-name]

# Update branch
git fetch origin master
git rebase origin/master

# Check status
git status
git log --oneline -5

# Fix mistakes
git reset --soft HEAD~1  # Undo last commit, keep changes
git stash                 # Save work temporarily
git stash pop            # Restore saved work
```

## Project Context

**Project**: SkillTree - A gamified skill-learning PWA
**Tech Stack**: 
- Frontend: Vite + React + TypeScript + TailwindCSS
- Backend: Fastify + Node.js + PostgreSQL
- Visualization: Cytoscape.js
- State: Zustand
- Auth: JWT with refresh tokens

**Key Documents**:
- `/docs/PM_GUIDELINES.md` - Detailed PM processes
- `/SkillTree - Project Brief v2.0.md` - Complete project specification
- `/PROJECT_MANAGEMENT.md` - Current sprint status
- GitHub Issues - Task assignments and requirements

## Your First Task

1. Check GitHub issues assigned to your role
2. Look for issues with your role prefix (e.g., `🔧 [ENGINEER]`)
3. Follow the workflow above to complete the task
4. Ask for clarification if anything is unclear

Remember: You're part of a professional development team. Maintain high standards, communicate clearly, and deliver quality work.

---
*Last Updated: 2025-09-13*
*Version: 1.0*