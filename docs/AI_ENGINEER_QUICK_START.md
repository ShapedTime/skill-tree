# AI Engineer Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Initialize the AI Engineer

Open a new Claude Desktop (Opus 4.1) session and paste:

```markdown
You are the AI Engineer for the SkillTree project. Your role is to optimize how our team works with AI agents through context engineering and workflow optimization.

Please review these documents:
1. Your role definition: https://github.com/ShapedTime/skill-tree/blob/master/docs/AI_ENGINEER_ROLE.md
2. Your instructions: https://github.com/ShapedTime/skill-tree/blob/master/docs/AGENT_INSTRUCTIONS_AI_ENGINEER.md

Current team:
- Product Owner (Human)
- Project Manager (Claude Desktop)
- Software Architect (Claude Code)
- UI/UX Developer (Claude Code)
- Software Engineer (Claude Code)
- AI Engineer (You)

Your first task: Analyze our current Sprint 1 tasks and suggest workflow optimizations.
```

### Step 2: Test with First Optimization

Ask the AI Engineer to optimize a specific workflow:

```markdown
Please create an optimized context package for the Software Engineer to implement user authentication. The task requirements are:
- JWT-based authentication
- Refresh token support
- PostgreSQL user storage
- Integration with Fastify

Previous work completed:
- Database schema designed
- Fastify server setup done

Create a minimal context package (<2000 tokens) that will help the Engineer complete this efficiently.
```

### Step 3: Use the Context Package

Copy the AI Engineer's optimized context package and paste it directly to your Claude Code agent.

## 📋 Common Use Cases

### Use Case 1: Starting a New Feature

**Ask the AI Engineer:**
```markdown
We're starting the skill tree visualization feature. Please:
1. Break down the work into parallel vs sequential tasks
2. Assign optimal agents to each task
3. Create context packages for the first parallel tasks
4. Identify potential bottlenecks
```

### Use Case 2: Agent Lost Context

**When an agent seems confused:**
```markdown
The UI/UX Developer lost context while working on the authentication forms. 
Last known good state: Basic form structure created.
Current confusion: How to integrate with backend API.

Please create a recovery context package to get them back on track.
```

### Use Case 3: Optimizing Handoffs

**For smooth transitions:**
```markdown
The Software Architect just completed the database schema design.
Next: Software Engineer needs to implement the Prisma models.

Create an optimal handoff document that transfers only essential context.
```

### Use Case 4: Daily Workflow Planning

**Each morning:**
```markdown
Here are today's priorities:
1. Complete user authentication
2. Start on skill tree data model
3. Fix responsive design issues

Please create an optimal workflow plan that maximizes parallel work and minimizes context switching.
```

## 🎯 Context Package Templates

### Minimal Implementation Context

```markdown
## Task: [Feature Name]
**Agent**: [Role]
**Priority**: 🔴 Critical

### Objective
[One sentence description]

### Requirements
- [ ] Requirement 1
- [ ] Requirement 2

### Key Files
- `path/to/file.ts` - [Why relevant]

### Dependencies
- Needs: [What must be done first]
- Blocks: [What's waiting on this]

### Success Criteria
- [ ] Tests pass
- [ ] Code reviewed
- [ ] Documented
```

### Quick Handoff Template

```markdown
## Handoff: [From] → [To]
**Feature**: [Name]

### Completed
- ✅ [What's done]

### Next Step
- [ ] [Specific action needed]

### Context
- Key decision: [Important choice made]
- Watch out for: [Potential issue]

### Files Changed
- `file.ts` - [What changed]
```

## 📊 Metrics to Track

Ask the AI Engineer for weekly reports:

```markdown
Please provide a weekly efficiency report including:
- Average context package size
- Task success rate (first attempt)
- Parallel work percentage
- Handoff success rate
- Agent confusion events
- Suggested improvements
```

## 🔧 Troubleshooting

### Problem: Context Too Large
**Solution:** Ask AI Engineer to compress:
```markdown
This context is 5000 tokens. Please compress to <2000 tokens while maintaining essential information.
```

### Problem: Agent Confusion
**Solution:** Request diagnostic:
```markdown
Agent seems confused about [task]. Please:
1. Identify likely confusion point
2. Create clarifying context
3. Suggest prevention strategy
```

### Problem: Slow Progress
**Solution:** Request workflow analysis:
```markdown
We're moving slowly on [feature]. Please analyze the workflow and identify:
1. Bottlenecks
2. Unnecessary sequential dependencies
3. Opportunities for parallelization
```

## 💡 Pro Tips

### 1. Batch Similar Tasks
Instead of switching contexts frequently, group similar tasks:
```markdown
We have 5 UI components to build. Create a batched context package for the UI/UX Developer to complete all in one session.
```

### 2. Pre-Stage Contexts
Prepare tomorrow's work today:
```markdown
Tomorrow we start on [feature]. Please prepare context packages for all agents who will be involved.
```

### 3. Use Session IDs
Track work across agents:
```markdown
Create context packages for Feature-Auth-001. Use this session ID for all related work.
```

### 4. Regular Optimization
Weekly improvements:
```markdown
Review this week's workflow. What three changes would most improve our efficiency?
```

## 📚 Advanced Techniques

### Parallel Swarm Pattern
```markdown
We need to build user dashboard with:
- API endpoints
- React components  
- Database queries

Design a parallel swarm pattern where all three agents work simultaneously.
```

### Context Relay Pattern
```markdown
Complex feature requiring multiple agents. Design a context relay where each agent adds to cumulative knowledge without full context reload.
```

### Expert Council Pattern
```markdown
We're designing the skill tree algorithm. Create context packages for all agents to provide their perspective, then synthesize recommendations.
```

## 🎯 Success Indicators

You'll know the AI Engineer is working when:
- ✅ Context packages are consistently <2000 tokens
- ✅ Agents complete tasks without confusion
- ✅ Multiple agents work in parallel
- ✅ Handoffs happen smoothly
- ✅ Rework decreases week over week

## 🚦 Getting Help

If you need assistance:

1. **Check the documentation:**
   - [Full Role Definition](/docs/AI_ENGINEER_ROLE.md)
   - [Agent Instructions](/docs/AGENT_INSTRUCTIONS_AI_ENGINEER.md)

2. **Ask the AI Engineer directly:**
   ```markdown
   I'm unsure how to [specific situation]. What's the best approach?
   ```

3. **Request examples:**
   ```markdown
   Show me an example of [specific pattern/technique].
   ```

---

## Ready to Start?

1. Open Claude Desktop (Opus 4.1)
2. Initialize with the setup prompt above
3. Try your first optimization task
4. Measure the improvement

**Remember:** The AI Engineer's goal is to make your work with AI agents faster, more reliable, and less frustrating. Use it liberally!

---

*Last Updated: 2025-09-13*  
*Quick Start Version: 1.0*