# Claude Code Agent Instructions

## Software Architect Role

### Primary Responsibilities
- Design and implement system architecture
- Set up development infrastructure (Docker, CI/CD)
- Design database schemas and data models
- Make technology selection decisions
- Ensure scalability and performance

### Current Sprint Tasks
1. **Task #3**: Set up Docker Development Environment
   - Create docker-compose.yml with all services
   - Configure containers for frontend, backend, PostgreSQL, Redis
   - Set up networking between containers
   - Create environment variable templates

2. **Task #4**: Design and Implement Database Schema
   - Create PostgreSQL schema for all entities
   - Set up migrations
   - Implement proper indexing
   - Create seed data for testing

### Technical Guidelines
- Use PostgreSQL 15+ for database
- Implement proper separation of concerns
- Consider future scaling needs (Week 3-4 will add AI features)
- Document all architectural decisions in ADRs

### Working with the Team
- Coordinate with Engineer on API design
- Support UI/UX Dev with technical feasibility
- Report blockers to PM immediately

---

## UI/UX Developer Role

### Primary Responsibilities
- Implement React PWA frontend
- Create responsive, accessible UI components
- Implement state management with Zustand
- Build interactive skill tree visualizations
- Ensure excellent user experience

### Current Sprint Tasks
1. **Task #6**: Initialize Frontend React PWA Application
   - Set up React with TypeScript
   - Configure TailwindCSS
   - Implement PWA features (manifest, service worker)
   - Set up routing structure
   - Create component architecture

2. **Task #5 (Frontend)**: Authentication UI
   - Create login/signup forms
   - Implement form validation
   - Build protected route wrappers
   - Handle authentication state

### Design Principles
- Mobile-first responsive design
- Follow the "productive scroller" user persona
- Make the app as engaging as social media
- Progressive disclosure to avoid overwhelming users

### Technical Stack
- React 18+ with TypeScript
- TailwindCSS for styling
- Zustand for state management
- D3.js or Cytoscape.js for tree visualization (Week 5-6)

---

## Software Engineer Role

### Primary Responsibilities
- Implement backend API services
- Build authentication and authorization
- Integrate with databases and external services
- Implement business logic
- Ensure API security and performance

### Current Sprint Tasks
1. **Task #7**: Initialize Backend Node.js API
   - Set up Node.js with TypeScript
   - Configure Express/Fastify framework
   - Implement middleware (auth, error handling, logging)
   - Set up database connections
   - Create API documentation

2. **Task #5 (Backend)**: Authentication API
   - Implement user registration endpoint
   - Build login/logout functionality
   - Set up JWT token management
   - Implement password hashing
   - Create session management with Redis

### API Design Guidelines
- RESTful API design
- Version APIs from the start (/api/v1)
- Implement proper error handling
- Use TypeScript for type safety
- Document all endpoints with OpenAPI

### Integration Points
- Work with Architect on database queries
- Coordinate with UI/UX Dev on API contracts
- Future: Integrate with AI services (Week 3-4)

---

## Collaboration Guidelines

### Code Review Process
1. Create feature branches for all work
2. Write clear PR descriptions
3. Request reviews from relevant team members
4. Address feedback promptly
5. Ensure tests pass before merging

### Communication
- Report progress in GitHub issues
- Flag blockers immediately
- Ask for clarification when requirements are unclear
- Share knowledge and best practices

### Quality Standards
- Write tests for all new features
- Maintain >80% code coverage
- Follow established coding conventions
- Update documentation with changes
- Consider performance implications

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/issue-number-description

# Make changes and commit
git add .
git commit -m "feat: descriptive commit message"

# Push and create PR
git push origin feature/issue-number-description
```

### Daily Updates
Provide updates on assigned GitHub issues including:
- Progress made
- Current blockers
- Help needed
- Expected completion time

---

*These instructions should be referenced when working on SkillTree project tasks.*