# ADR-002: Backend Technology Stack Selection

**Status**: Accepted
**Date**: 2025-09-13
**Decision Makers**: Software Architect, Product Owner
**Consulted**: Development Team
**Informed**: All Stakeholders

## Context

SkillTree requires a robust backend API to handle:

- **User Management**: Authentication, profiles, progress tracking
- **Skill Tree Data**: Complex graph structures with dependencies
- **Real-time Features**: Progress updates, notifications, social features
- **Performance**: Fast response times for mobile PWA experience
- **Scalability**: Support for growing user base and skill complexity
- **Integration**: Future Go microservices for AI/graph algorithms

## Decision

We will use **Fastify + Node.js + TypeScript** for the backend API.

### Selected Technologies:

- **Runtime**: Node.js 18.x LTS (with ES modules support)
- **Framework**: Fastify 4.x (high-performance web framework)
- **Language**: TypeScript 5.x in strict mode
- **Validation**: Fastify's built-in JSON Schema validation
- **Logging**: Fastify's integrated Pino logger
- **Process Management**: PM2 for production deployment

## Options Considered

### Backend Frameworks
| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **Fastify** ✅ | • 2x faster than Express<br>• TypeScript-first design<br>• Built-in validation/serialization<br>• Plugin ecosystem<br>• JSON Schema support | • Smaller ecosystem than Express<br>• Learning curve for team | **SELECTED** |
| Express | • Mature ecosystem<br>• Large community<br>• Extensive middleware<br>• Team familiarity | • Slower performance<br>• Middleware complexity<br>• No built-in TypeScript support | Rejected |
| NestJS | • Enterprise architecture<br>• Decorator-based<br>• Built-in features<br>• TypeScript native | • Heavy framework<br>• Steep learning curve<br>• Over-engineered for MVP | Rejected |

### Runtime Options
| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **Node.js 18 LTS** ✅ | • JavaScript ecosystem<br>• JSON handling excellence<br>• Large talent pool<br>• NPM package ecosystem | • Single-threaded limitations<br>• CPU-intensive concerns | **SELECTED** |
| Deno | • Built-in TypeScript<br>• Modern runtime<br>• Security-first<br>• Web APIs | • Smaller ecosystem<br>• Limited production use<br>• Learning curve | Rejected |
| Bun | • Extremely fast<br>• Built-in bundler<br>• Node.js compatibility | • Too experimental<br>• Limited production use<br>• Stability concerns | Rejected |

## Rationale

### Why Fastify?
1. **Performance**: 2x faster than Express with JSON handling optimization
2. **TypeScript Integration**: First-class TypeScript support and type inference
3. **Schema Validation**: Built-in JSON Schema validation reduces boilerplate
4. **Plugin Architecture**: Clean separation of concerns with encapsulation
5. **Developer Experience**: Excellent error messages and debugging support

### Why Node.js 18 LTS?
1. **Ecosystem Alignment**: Matches frontend JavaScript/TypeScript stack
2. **JSON Performance**: Optimal for API-heavy skill tree data structures
3. **Team Efficiency**: Single language across full stack
4. **Package Ecosystem**: Vast NPM ecosystem for integrations
5. **LTS Stability**: Long-term support for production reliability

### Why TypeScript Strict Mode?
1. **API Contracts**: Type-safe request/response schemas
2. **Integration Safety**: Clear interfaces for Go microservice integration
3. **Database Types**: Seamless integration with Prisma ORM types
4. **Error Reduction**: Compile-time catching of type mismatches
5. **Refactoring Confidence**: Safe code evolution as features grow

### Performance Considerations
1. **CPU-Intensive Tasks**: Go microservices handle complex graph algorithms
2. **I/O Operations**: Node.js excels at database queries and API responses
3. **Caching Strategy**: Redis integration for frequently accessed skill trees
4. **Connection Pooling**: Proper database connection management
5. **Request Validation**: Fast JSON Schema validation built into Fastify

## Consequences

### Positive
- **High Performance**: Fastify provides excellent throughput for API requests
- **Type Safety**: End-to-end type safety from database to API responses
- **Developer Productivity**: Shared language and tooling with frontend
- **Scalability**: Plugin architecture supports modular feature growth
- **Integration Ready**: Easy integration with Go services and PostgreSQL

### Negative
- **Learning Curve**: Team needs Fastify-specific patterns and plugins
- **CPU Limitations**: Complex algorithms require Go microservice offloading
- **Plugin Dependency**: Reliance on Fastify plugin ecosystem maturity

### Risks and Mitigation
- **Risk**: Performance bottlenecks with complex skill tree operations
  - **Mitigation**: Go microservices handle computationally intensive tasks
- **Risk**: Fastify ecosystem smaller than Express
  - **Mitigation**: Core functionality built-in, custom plugins where needed
- **Risk**: TypeScript configuration complexity
  - **Mitigation**: Standard tsconfig with Fastify TypeScript provider

## Architecture Patterns

### API Design
- **RESTful Endpoints**: Standard REST conventions for CRUD operations
- **Resource-based URLs**: `/api/v1/users/{id}/skill-trees/{treeId}`
- **HTTP Status Codes**: Proper status code usage (200, 201, 400, 401, 404, 500)
- **Error Handling**: Consistent error response format with error codes
- **Versioning**: API versioning from day one (`/api/v1/`)

### Code Organization
```
src/
├── routes/           # Fastify route handlers
├── plugins/          # Fastify plugins and middleware
├── services/         # Business logic layer
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── server.ts        # Application entry point
```

### Security Considerations
- **Input Validation**: JSON Schema validation on all inputs
- **Rate Limiting**: Request rate limiting to prevent abuse
- **CORS Configuration**: Proper CORS setup for PWA frontend
- **Security Headers**: Helmet.js integration for security headers
- **JWT Integration**: Secure token validation and refresh

## Implementation Plan

### Phase 1: Core API Setup (Week 2)
- [ ] Initialize Fastify project with TypeScript
- [ ] Configure JSON Schema validation patterns
- [ ] Set up error handling and logging
- [ ] Implement health check endpoints
- [ ] Configure development and production environments

### Phase 2: Authentication API (Week 2-3)
- [ ] Implement JWT authentication routes
- [ ] Add refresh token functionality
- [ ] Set up user registration and login
- [ ] Configure password hashing and validation
- [ ] Add rate limiting for auth endpoints

### Phase 3: Skill Tree API (Week 3-4)
- [ ] Design skill tree data models
- [ ] Implement CRUD operations for skill trees
- [ ] Add skill dependency validation
- [ ] Create user progress tracking endpoints
- [ ] Optimize database queries for tree operations

### Phase 4: Integration Layer (Week 4-5)
- [ ] Add Go microservice communication layer
- [ ] Implement graph algorithm service calls
- [ ] Set up Redis caching for performance
- [ ] Add monitoring and metrics collection
- [ ] Configure production deployment scripts

## Performance Targets

- **Response Time**: < 100ms for skill tree data queries
- **Throughput**: > 1000 requests/second sustained
- **Memory Usage**: < 500MB base memory footprint
- **Database Connections**: Efficient connection pooling
- **Error Rate**: < 0.1% error rate in production

## Testing Strategy

- **Unit Tests**: Jest for business logic and utility functions
- **Integration Tests**: API endpoint testing with test database
- **Load Testing**: Artillery.js for performance validation
- **Contract Testing**: API schema validation in CI/CD
- **Security Testing**: Automated security vulnerability scanning

## Monitoring and Observability

- **Logging**: Structured JSON logging with Pino
- **Metrics**: Custom metrics for skill tree operations
- **Health Checks**: Comprehensive health check endpoints
- **Error Tracking**: Integration with error reporting service
- **Performance Monitoring**: Request timing and database query metrics

---

**Decision Status**: ✅ **APPROVED** by Product Owner on 2025-09-13
**Next Review**: Sprint 2 (Week 4) - Performance benchmarks and scalability assessment
**Related ADRs**: ADR-001 (Frontend), ADR-003 (Database), ADR-004 (Authentication)