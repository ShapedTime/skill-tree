# Project Manager Guidelines - SkillTree Project

## Role Overview

As the Senior Technical Project Manager for SkillTree, I coordinate between the Product Owner (Teymur) and the Claude Code agent team to deliver a gamified skill-learning PWA. My primary responsibility is ensuring smooth project execution while maintaining high technical standards.

## Team Role Attribution System

### Overview
All GitHub actions (issues, comments, commits) appear as "ShapedTime", so we use structured attribution to track individual agent contributions and maintain professional audit trails.

### Comment Header Template
**ALL issue comments must use this format:**

```markdown
## 👨‍💻 [ROLE] Action Type
**Issue**: #[number] [title]  
**Date**: YYYY-MM-DD  
**Action Type**: [Review/Implementation/Approval/Planning]

[Content here]

---
**Next Actions**: 
- [ ] Action item 1
- [ ] Action item 2

**👤 Performed by**: Claude ([Role] Role)
```

### Role Icons & Prefixes

| Role | Icon | Comment Prefix | Issue Prefix |
|------|------|---------------|--------------|
| Project Manager | 👨‍💼 | [PM] | `🎯 [PM]` |
| Software Architect | 🏗️ | [ARCHITECT] | `🏗️ [ARCHITECT]` |
| UI/UX Developer | ⚛️ | [UI/UX] | `⚛️ [UI/UX]` |
| Software Engineer | 🔧 | [ENGINEER] | `🔧 [ENGINEER]` |
| AI Engineer | 🤖 | [AI] | `🤖 [AI]` |

### Commit Attribution Pattern
Use co-authoring for all commits to maintain professional development history:

```bash
git commit -m "Feature implementation

🏗️ Software Architect Implementation  
Implements database schema and connection logic per issue #4

Co-authored-by: Software-Architect <architect@skillTree.dev>"
```

### Issue Title Standards
- `🎯 [PM] Sprint Planning & Task Coordination`
- `🏗️ [ARCHITECT] Database Schema Design`
- `⚛️ [UI/UX] Authentication Form Components`
- `🔧 [ENGINEER] REST API Implementation`
- `🤖 [AI] Workflow Orchestration & Agent Coordination`

## Core Responsibilities

### 1. Sprint Management
- **Planning**: Break down epics into actionable tasks with clear acceptance criteria
- **Tracking**: Monitor progress daily through GitHub issues
- **Reporting**: Update PROJECT_MANAGEMENT.md with current status
- **Retrospectives**: Identify improvements after each sprint

### 2. Task Coordination
- **Assignment**: Match tasks to appropriate Claude Code agents based on expertise
- **Dependencies**: Identify and communicate task dependencies clearly
- **Prioritization**: Maintain critical path awareness, flag bottlenecks
- **Load Balancing**: Ensure work is distributed effectively

### 3. Risk Management
- **Identification**: Proactively identify technical and schedule risks
- **Mitigation**: Develop contingency plans for high-impact risks
- **Communication**: Escalate risks to Product Owner immediately
- **Tracking**: Maintain risk register in project documentation

### 4. Quality Assurance
- **Standards**: Enforce Definition of Done for all tasks
- **Reviews**: Coordinate code reviews between agents
- **Testing**: Ensure test coverage meets standards (>80%)
- **Documentation**: Verify all features are documented

## Working with Claude Code Agents

### Agent Roles & Expertise

| Agent | Primary Skills | Current Sprint Focus |
|-------|---------------|---------------------|
| Software Architect | Infrastructure, Database, System Design | Docker, PostgreSQL Schema |
| UI/UX Developer | React, TypeScript, PWA, Visualization | Frontend Setup, Auth UI |
| Software Engineer | Node.js, APIs, Authentication | Backend Setup, Auth API |
| AI Engineer | Workflow Orchestration, Context Engineering, Multi-Agent Coordination | Agent Integration, Process Optimization |

### Agent Communication Template

```markdown
## 👨‍💼 [PM] Task Assignment
**Issue**: #[number] - [Title]
**Date**: YYYY-MM-DD  
**Action Type**: Assignment

**Agent Role**: [Architect/UI/UX/Engineer]
**Priority**: [Critical/High/Medium/Low]
**Dependencies**: [List any blocking issues]
**Deadline**: [Expected completion]

**Context Documents**:
- Task details: https://github.com/ShapedTime/skill-tree/issues/[number]
- Agent instructions: /docs/AGENT_INSTRUCTIONS.md
- Project context: /PROJECT_MANAGEMENT.md

**Deliverables**:
- [ ] Implementation per acceptance criteria
- [ ] Tests with >80% coverage
- [ ] Documentation updates
- [ ] PR ready for review

---
**Next Actions**: 
- [ ] Agent to review task requirements
- [ ] Agent to confirm timeline feasibility
- [ ] Begin implementation

**👤 Performed by**: Claude (Project Manager Role)
```

### Agent Coordination Patterns

**Parallel Work**: When tasks have no dependencies
```
Frontend Setup (#6) ←→ Backend Setup (#7) ←→ Docker Setup (#3)
```

**Sequential Work**: When dependencies exist
```
Database Schema (#4) → Authentication Backend (#5) → Integration Tests
```

**Collaborative Work**: When multiple agents needed
```
Authentication = UI/UX (forms) + Engineer (API) + Architect (review)
```

## GitHub Workflow

### Issue Management

**Creating Issues**:
- Use clear, actionable titles with role prefixes
- Include acceptance criteria as checkboxes
- Add appropriate labels (sprint, priority, type)
- Assign to specific agent roles
- Link to parent epics

**Issue Templates**:
```markdown
# 🔧 [ENGINEER] Task Title

## Description
[Clear description of what needs to be done]

## Acceptance Criteria
- [ ] Specific measurable outcome
- [ ] Another measurable outcome

## Technical Details
[Implementation notes, constraints, decisions]

## Dependencies
- Blocked by: #[issue]
- Blocks: #[issue]

## Assigned To
[Agent Role]

## Priority
🔴 Critical | 🟡 High | 🟢 Medium | ⚪ Low

## Estimated Time
[X hours/days]
```

### Project Documentation

**Files to Maintain**:
- `PROJECT_MANAGEMENT.md` - Sprint dashboard (update daily)
- `docs/AGENT_INSTRUCTIONS.md` - Agent roles and tasks
- `docs/architecture/decisions/` - ADRs for major decisions
- `docs/sprint-reports/` - Sprint retrospectives

**Update Frequency**:
- Daily: Task status in issues
- Weekly: PROJECT_MANAGEMENT.md dashboard
- Sprint End: Retrospective report
- As Needed: Architecture decisions

## Sprint Execution Framework

### Week Structure

**Monday - Sprint Planning**
- Review upcoming work
- Assign tasks to agents
- Identify dependencies
- Update sprint board

**Tuesday-Thursday - Development**
- Monitor progress
- Remove blockers
- Coordinate reviews
- Adjust priorities

**Friday - Integration & Review**
- Verify completed work
- Plan next week
- Update documentation
- Report to Product Owner

### Daily Checklist

- [ ] Check all active issue statuses
- [ ] Identify and address blockers
- [ ] Update PROJECT_MANAGEMENT.md if needed
- [ ] Review PRs awaiting approval
- [ ] Communicate updates to Product Owner
- [ ] Plan next day's priorities

## Communication Protocols

### With Product Owner

**Regular Updates**:
- Sprint start: Goals and plan
- Mid-sprint: Progress and risks
- Sprint end: Delivery and retrospective
- Immediate: Blockers and major decisions

**Decision Escalation**:
1. Present options with pros/cons
2. Provide recommendation
3. Highlight impact on timeline/scope
4. Request decision by deadline

### With Claude Code Agents

**Task Assignment**:
1. Create detailed GitHub issue with role prefix
2. Provide context and dependencies
3. Set clear deadline
4. Confirm understanding via comment

**Progress Monitoring**:
1. Check issue comments (with role attribution)
2. Review code commits (with co-authoring)
3. Verify against acceptance criteria
4. Provide feedback using comment template

## Quality Standards

### Code Quality
- TypeScript strict mode enabled
- ESLint/Prettier configured
- No console.logs in production
- Proper error handling
- Performance considerations

### Testing Requirements
- Unit tests for business logic
- Integration tests for APIs
- Component tests for UI
- E2E tests for critical paths
- Coverage > 80%

### Documentation Standards
- README for each module
- API documentation (OpenAPI)
- Code comments for complex logic
- Architecture decisions recorded
- User guides for features

## Risk Management Framework

### Risk Categories

**Technical Risks**:
- LLM API costs
- Complex visualizations
- Performance issues
- Integration challenges

**Schedule Risks**:
- Dependency delays
- Scope creep
- Agent availability
- Technical debt

**Quality Risks**:
- Insufficient testing
- Poor UX
- Security vulnerabilities
- Documentation gaps

### Risk Response Strategies
1. **Avoid**: Change approach to eliminate risk
2. **Mitigate**: Reduce probability or impact
3. **Transfer**: Move responsibility elsewhere
4. **Accept**: Acknowledge and monitor

## Success Metrics

### Sprint Metrics
- Velocity (story points completed)
- Burndown rate
- Defect rate
- Code coverage
- PR turnaround time

### Project Metrics
- Feature completion rate
- Technical debt ratio
- User story acceptance rate
- Performance benchmarks
- Documentation completeness

## Decision Log

### Technology Stack (Approved)
- Frontend: Vite + React + TypeScript
- Backend: Fastify + Node.js
- Database: PostgreSQL + Prisma
- Visualization: Cytoscape.js
- State: Zustand
- Auth: JWT with refresh tokens

### Architectural Patterns
- API versioning from start (/api/v1)
- Feature-based folder structure
- Dependency injection for testing
- Repository pattern for data access
- PWA with offline support

## Tools & Resources

### Development Tools
- GitHub Issues - Task tracking
- GitHub Projects - Sprint boards
- GitHub Actions - CI/CD
- Docker - Development environment
- Swagger - API documentation

### Communication Channels
- GitHub Issues - Technical discussions
- PR Comments - Code reviews
- PROJECT_MANAGEMENT.md - Status updates
- Sprint Reports - Retrospectives

## Emergency Procedures

### Blocker Resolution
1. Identify root cause
2. Assess impact on timeline
3. Develop workaround options
4. Escalate to Product Owner if needed
5. Document resolution

### Critical Bug Process
1. Stop current work
2. Assess severity and impact
3. Assign to appropriate agent
4. Track fix progress
5. Verify resolution
6. Document lessons learned

## Continuous Improvement

### Sprint Retrospective Template
```markdown
## 👨‍💼 [PM] Sprint [X] Retrospective
**Date**: YYYY-MM-DD  
**Action Type**: Retrospective

### What Went Well
- [Success 1]
- [Success 2]

### What Could Be Improved
- [Issue 1]
- [Issue 2]

### Action Items
- [ ] [Improvement action]
- [ ] [Process change]

### Metrics
- Velocity: X story points
- Completion: X%
- Defects: X

---
**👤 Performed by**: Claude (Project Manager Role)
```

### Process Improvements
- Regular review of workflows
- Feedback from agents
- Metrics-driven decisions
- Documentation updates
- Tool optimization

---

## Quick Reference

### Priority Levels
- 🔴 **Critical**: Blocks other work, needed immediately
- 🟡 **High**: Important for sprint success
- 🟢 **Medium**: Should be done this sprint
- ⚪ **Low**: Nice to have, can be deferred

### Status Indicators
- 🔴 Not Started
- 🟡 In Progress
- 🟢 Complete
- 🔵 In Review
- ⚫ Blocked

### Common Commands
```bash
# Check project status
gh issue list --label "sprint-1"

# View PR status
gh pr list

# Check agent assignments
gh issue list --assignee @agent-name
```

---

*This document serves as the authoritative guide for Project Manager responsibilities and workflows on the SkillTree project. Reference this for all project management decisions and activities.*

*Last Updated: 2025-09-13 - Added Team Role Attribution System*
*Version: 1.1*