# ADR-001: Docker Development Environment Architecture

**Status**: Proposed
**Date**: 2025-09-14
**Architect**: Claude (Software Architect Role)
**Issue**: #3 - Docker Development Environment Setup

## Context

SkillTree is a Progressive Web Application that gamifies skill acquisition through interactive skill trees. The project uses a monorepo structure and requires a Docker development environment that:

- Supports immediate React + Fastify development needs
- Provides foundation for future Go microservices expansion
- Enables consistent development across team members
- Blocks current development until resolved (CRITICAL priority)

### Current Requirements
- **Frontend**: Vite + React + TypeScript (port 3000)
- **Backend**: Fastify + Node.js (port 8000)
- **Database**: PostgreSQL 15+ (port 5432)
- **Cache**: Redis (port 6379)
- **Development Features**: Hot reload, debugging, logging
- **Future Expansion**: Go microservices (tree-engine, graph-engine, ai-gateway)

## Decision

### Architecture Overview

We will implement a **layered microservices architecture** using Docker Compose with:

1. **Development-First Design**: Optimized for local development with production-ready foundations
2. **Service Isolation**: Each service in its own container with defined interfaces
3. **Scalable Network Architecture**: Shared Docker networks for inter-service communication
4. **Environment Flexibility**: Separate configurations for development and production

### Service Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Docker Network: skilltree-network        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Frontend   │  │   Backend    │  │   Database   │      │
│  │              │  │              │  │              │      │
│  │ Vite + React │  │   Fastify    │  │ PostgreSQL   │      │
│  │   Port 3000  │  │   Port 8000  │  │   Port 5432  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│         │                  │                  │            │
│         └─────────┬────────┴─────────┬────────┘            │
│                   │                  │                     │
│  ┌──────────────┐ │     ┌──────────────┐                   │
│  │     Redis    │ │     │   (Future)   │                   │
│  │   Cache      │ │     │      Go      │                   │
│  │   Port 6379  │ │     │ Microservices│                   │
│  └──────────────┘ │     └──────────────┘                   │
│         │          │                                       │
│         └──────────┘                                       │
└─────────────────────────────────────────────────────────────┘
```

### Directory Structure

```
skill-tree/
├── docker/
│   ├── development/
│   │   ├── docker-compose.yml        # Main dev compose file
│   │   ├── docker-compose.override.yml # Dev-specific overrides
│   │   └── .env.example              # Environment template
│   ├── production/
│   │   └── docker-compose.prod.yml   # Production configuration
│   └── scripts/
│       ├── setup.sh                  # Initial setup script
│       ├── start-dev.sh              # Development startup
│       └── logs.sh                   # Log aggregation script
├── projects/
│   ├── web-app/                      # React frontend
│   │   ├── Dockerfile.dev
│   │   ├── Dockerfile.prod
│   │   └── package.json
│   ├── api-gateway/                  # Node.js backend
│   │   ├── Dockerfile.dev
│   │   ├── Dockerfile.prod
│   │   └── package.json
│   └── ai-service/                   # Future Go service
│       └── Dockerfile
├── shared/
│   ├── database/
│   │   ├── init/                     # DB initialization scripts
│   │   └── migrations/               # Schema migrations
│   └── configs/
│       ├── nginx/                    # Reverse proxy config
│       └── redis/                    # Redis configuration
└── .env.example                      # Root environment template
```

## Service Specifications

### 1. Frontend Service (web-app)

**Technology**: Vite + React + TypeScript
**Port**: 3000
**Volume Mounts**: Source code for hot reload
**Environment Variables**: API endpoints, feature flags

```dockerfile
# Dockerfile.dev
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

### 2. Backend Service (api-gateway)

**Technology**: Fastify + Node.js
**Port**: 8000
**Dependencies**: PostgreSQL, Redis
**Volume Mounts**: Source code for hot reload
**Health Check**: `/health` endpoint

```dockerfile
# Dockerfile.dev
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "dev"]
```

### 3. Database Service

**Technology**: PostgreSQL 15+
**Port**: 5432
**Volume Mounts**: Persistent data storage, init scripts
**Health Check**: pg_isready

### 4. Cache Service

**Technology**: Redis
**Port**: 6379
**Volume Mounts**: Configuration, optional persistence
**Health Check**: redis-cli ping

### 5. Development Tools (Optional)

- **Adminer**: Database management UI (port 8080)
- **Redis Commander**: Redis management UI (port 8081)

## Network Configuration

### Docker Networks
- **skilltree-network**: Bridge network for all services
- **External Access**: Only frontend and development tools exposed to host
- **Internal Communication**: Backend services communicate via service names

### Security Considerations
- Database and Redis not exposed to host by default
- Environment variables for sensitive configuration
- Separate networks for different environments
- Health checks for service monitoring

## Development Workflow

### Initial Setup
```bash
# Clone repository
git clone <repo-url> skill-tree
cd skill-tree

# Copy environment template
cp .env.example .env

# Start development environment
./docker/scripts/start-dev.sh
```

### Daily Development
```bash
# Start services
docker-compose -f docker/development/docker-compose.yml up

# View logs
./docker/scripts/logs.sh

# Access services
# Frontend: http://localhost:3000
# Backend: http://localhost:8000
# Database Admin: http://localhost:8080
```

### Hot Reload Configuration
- **Frontend**: Vite dev server with file watching
- **Backend**: Nodemon for automatic restarts
- **Volume Mounts**: Source code mounted for live updates

## Future Expansion Strategy

### Go Microservices Integration
When adding Go microservices (tree-engine, graph-engine, ai-gateway):

1. **Network Integration**: Use existing skilltree-network
2. **Service Discovery**: Docker service names for internal communication
3. **Load Balancing**: Nginx reverse proxy configuration
4. **Configuration**: Extend docker-compose with new services

### Production Readiness
- **Multi-stage Dockerfiles**: Optimized production builds
- **Health Checks**: Comprehensive monitoring
- **Secrets Management**: Docker secrets or external solutions
- **Scaling**: Docker Swarm or Kubernetes ready

## Performance Considerations

### Development Optimizations
- **Build Caching**: Layer optimization for faster rebuilds
- **Volume Strategies**: Bind mounts for development, named volumes for data
- **Resource Limits**: Appropriate memory/CPU constraints
- **Networking**: Efficient inter-service communication

### Monitoring & Debugging
- **Log Aggregation**: Centralized logging strategy
- **Debug Ports**: Exposed for IDE integration
- **Performance Metrics**: Container resource monitoring
- **Health Checks**: Service availability monitoring

## Alternatives Considered

### Alternative 1: Monolithic Approach
**Pros**: Simpler initial setup, fewer moving parts
**Cons**: Limited scalability, tight coupling, harder to maintain

### Alternative 2: Kubernetes from Start
**Pros**: Production-ready, advanced orchestration
**Cons**: Over-engineering for MVP, steep learning curve, development complexity

### Alternative 3: VM-based Development
**Pros**: Full OS isolation, traditional approach
**Cons**: Resource intensive, slower startup, less portable

## Risks and Mitigation

| Risk | Impact | Probability | Mitigation |
|------|---------|-------------|------------|
| Docker learning curve | Medium | Medium | Comprehensive documentation, setup scripts |
| Performance overhead | Low | Low | Optimized configurations, resource monitoring |
| Port conflicts | Low | Medium | Configurable ports, documentation |
| Data persistence | High | Low | Named volumes, backup strategies |
| Service startup order | Medium | Medium | Health checks, dependency management |

## Implementation Tasks

### Phase 1: Core Infrastructure (Week 1)
1. Create directory structure
2. Implement basic Docker Compose configuration
3. Create Dockerfiles for frontend and backend
4. Set up PostgreSQL and Redis services
5. Configure networking and basic health checks

### Phase 2: Development Experience (Week 1-2)
6. Implement hot reload for both services
7. Set up environment variable management
8. Create development scripts and documentation
9. Add development tools (Adminer, Redis Commander)
10. Configure logging and debugging

### Phase 3: Production Foundation (Week 2)
11. Create production Dockerfiles with multi-stage builds
12. Implement comprehensive health checks
13. Set up basic monitoring and metrics
14. Document deployment procedures
15. Create CI/CD integration points

## Success Criteria

- [ ] All services start with single `docker-compose up` command
- [ ] Frontend hot reload works for React components
- [ ] Backend hot reload works for API changes
- [ ] Database persists data between restarts
- [ ] Services can communicate via Docker network
- [ ] Development tools accessible and functional
- [ ] Documentation allows new developer to start in <10 minutes
- [ ] Performance acceptable for development workflow

## Conclusion

This Docker development environment provides a solid foundation for immediate React + Fastify development while establishing patterns for future microservices expansion. The architecture prioritizes developer experience while maintaining production-ready practices.

The modular design allows incremental adoption and reduces the risk of over-engineering while ensuring the critical blocking requirement is resolved efficiently.

---

**Next Actions**:
- [ ] Review and approve architecture design
- [ ] Create implementation task breakdown
- [ ] Begin Phase 1 implementation
- [ ] Coordinate with Software Engineer for technical implementation

**👤 Performed by**: Claude (Software Architect Role)