# SkillTree - Project Brief v2.0

## Executive Summary

**SkillTree** is a Progressive Web Application that transforms skill acquisition into an engaging, gamified experience inspired by strategy game tech trees. Unlike traditional linear learning paths, it presents interconnected skill networks where knowledge domains overlap and reinforce each other. The app serves as a productive alternative to mindless social media scrolling, offering users measurable personal growth through structured learning paths.

## Vision Statement

> "Transform idle scrolling time into skill mastery - making self-improvement as engaging as social media, but with lasting value."

## Team Structure

- **Product Owner & Senior Software Engineer**: Project Lead
- **Project Manager**: AI Agent (Strategy, Planning, Coordination)
- **UI/UX Developer**: Claude Code Agent
- **Software Architect**: Claude Code Agent
- **Software Engineer**: Claude Code Agent
- **AI Engineer**: Claude Code Agent (Workflow Orchestration, Context Engineering, Multi-Agent Coordination)

## Target Users & Personas

### Primary Persona: "The Productive Scroller"

- **Age**: 20-35
- **Characteristics**: Digital natives frustrated with time wasted on social media
- **Pain Points**:
  - Guilt from unproductive social media usage
  - Desire for self-improvement but lacking structure
  - Information overload without clear learning paths
  - No tangible progress from hours spent online
- **Example**: Alex, 26, spends 2+ hours daily on social media, wants to learn guitar and coding but doesn't know where to start

## Core Features (MVP)

### 1. Intelligent Skill Assessment
- 3-6 minute adaptive questionnaire
- Current knowledge mapping
- Learning style identification
- Time availability & commitment level
- Goal setting (hobby vs professional mastery)

### 2. AI-Generated Interconnected Skill Trees

**Visual Design**: Civilization-style branching paths with interconnections

**Node Types**:
- 🎯 **Milestones** - Major achievements
- 📚 **Sub-skills** - Specific competencies
- 💪 **Practice Sessions** - Hands-on activities
- 🎓 **Learning Resources** - Courses, articles, videos
- 🔄 **Review/Reinforcement** - Knowledge retention nodes

**Features**:
- Cross-skill connections (e.g., music theory benefits both guitar and piano)
- Adaptive difficulty indicators (beginner/intermediate/advanced)
- Dependency mapping and prerequisites

### 3. Smart Timeline Generation
- Balanced learning schedule
- Parallel track recommendations
  - Example: "Week 1: 30% music theory, 70% basic chords"
- Estimated hours per node
- Suggested daily/weekly commitment

### 4. Multiple Completion Methods
- ✅ Self-attestation with reflection prompts
- 📝 AI-generated quizzes
- ⏱️ Time tracking/practice logs
- 📹 Video/audio uploads (future social proof)
- 🔗 External credential linking

### 5. Dynamic Tree Editing
- Edit node content/descriptions
- Add custom nodes
- Merge similar nodes
- Remove irrelevant nodes
- AI recalculates dependencies and timelines after changes

### 6. Progress & Gamification
- XP system with levels
- Streak tracking
- Achievement badges
- Visual progress on tree (nodes light up when completed)
- Overall mastery percentage

## User Flows

### Flow 1: New Skill Journey
```
Landing (value prop: "Turn scroll time into skill time")
    ↓
Sign Up
    ↓
"What do you want to master?"
    ↓
Quick Assessment (3-6 min)
    ↓
AI generates complex skill tree
    ↓
View interconnections with other skills
    ↓
Customize tree (optional)
    ↓
Get personalized timeline
    ↓
Start first node
```

### Flow 2: Daily Learning Session
```
Open App (instead of social media)
    ↓
Dashboard shows today's focus
    ↓
Select active node
    ↓
View node details (overview, resources, time estimate)
    ↓
Complete activity (read/practice/quiz)
    ↓
Log completion method
    ↓
Gain XP & see tree progress
    ↓
Get recommendation for next node
```

### Flow 3: Tree Customization
```
View skill tree
    ↓
Select node to modify
    ↓
Edit/Add/Merge nodes
    ↓
AI recalculates timeline
    ↓
Confirm changes
```

## Technical Architecture

### Development Phases
- **Phase 1**: Local development with Docker
- **Phase 2**: AWS deployment (ECS/Lambda, RDS, S3)

### Technology Stack

#### Frontend
- React PWA with TypeScript
- D3.js or Cytoscape.js for tree visualization
- Zustand for state management
- TailwindCSS for styling

#### Backend
- **Node.js with Express/Fastify** for main API
- **Go microservices** for:
  - Tree generation algorithms
  - Graph traversal and dependency calculations
  - Bulk data processing

#### Database
- PostgreSQL with JSON columns for flexible node data
- Redis for session/cache

#### AI/LLM Integration
- OpenAI/Anthropic for tree generation
- Prompt engineering for consistent outputs
- Token optimization strategies
- Caching common skill trees as templates

## Success Metrics

### Learning Goals
- Master AI agent orchestration patterns
- Build robust prompt engineering pipeline
- Implement efficient graph algorithms
- Create seamless LLM-powered UX

### MVP Success Criteria
- Generate coherent skill trees for 10 different domains
- Complete user journey from signup to first node completion
- Tree customization works without breaking dependencies
- Response time <2s for tree modifications

## Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| LLM API costs | High | Cache common trees, implement token limits, use templates |
| Complex tree visualization | Medium | Start with simpler layout, iterate based on feedback |
| User overwhelm | High | Progressive disclosure, guided mode for beginners |
| Graph algorithm complexity | Medium | Start with simpler dependencies, use existing libraries |

## MVP Roadmap (8-10 weeks)

### Week 1-2: Foundation
- Set up development environment
- Database schema for users, skills, nodes, progress
- Basic auth flow
- Create Asana project structure for team

### Week 3-4: AI Core
- LLM integration for tree generation
- Prompt engineering for consistent skill trees
- Basic tree data structure and storage

### Week 5-6: Visualization
- Tree rendering with D3.js/Cytoscape
- Node interaction (click, view details)
- Progress visualization

### Week 7-8: User Journey
- Assessment flow
- Node completion mechanisms
- Basic gamification (XP, streaks)

### Week 9-10: Polish
- Tree customization
- Timeline generation
- PWA features
- Testing and refinement

## Database Schema (Draft)

### Core Tables
- **users**: id, email, username, created_at
- **skills**: id, name, category, description
- **skill_trees**: id, user_id, skill_id, tree_data (JSON), created_at
- **nodes**: id, tree_id, type, content, position, dependencies (array)
- **progress**: id, user_id, node_id, status, completion_method, completed_at
- **user_stats**: user_id, total_xp, current_streak, badges (JSON)

## AI Prompting Strategy (Initial)

### Tree Generation Prompt Structure
1. Context: User's current level, goals, time commitment
2. Skill: Specific skill to learn
3. Output Format: Structured JSON with nodes, dependencies, time estimates
4. Constraints: Number of nodes, difficulty progression, interconnections

## Future Evolution Path

1. **Phase 2**: Social features (share trees, follow learners)
2. **Phase 3**: AI-generated practice content
3. **Phase 4**: Community challenges and group learning
4. **Phase 5**: Mobile app with push notifications

## Open Questions & Decisions

- [ ] Which tree visualization library? (D3.js vs Cytoscape.js vs custom)
- [ ] Authentication method? (NextAuth, Auth0, custom JWT)
- [ ] Initial skill domains to support?
- [ ] Free tier limitations?
- [ ] Data privacy approach for uploaded content?

## Definition of Done (MVP)

- [ ] User can sign up and complete assessment
- [ ] AI generates personalized skill tree
- [ ] Tree is visually rendered and interactive
- [ ] User can complete nodes via at least 2 methods
- [ ] Progress is saved and gamification works
- [ ] User can customize their tree
- [ ] PWA is installable
- [ ] Basic responsive design works on mobile

---

*Version: 2.0*  
*Status: In Development*