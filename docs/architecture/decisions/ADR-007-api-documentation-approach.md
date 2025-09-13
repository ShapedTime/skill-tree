# ADR-007: API Documentation Approach

**Status**: Accepted
**Date**: 2025-09-13
**Decision Makers**: Software Architect, Product Owner
**Consulted**: Development Team, UI/UX Developer
**Informed**: All Stakeholders

## Context

SkillTree requires comprehensive API documentation to support:

- **Frontend Development**: Clear API contracts for React integration
- **Team Collaboration**: Shared understanding of API endpoints and data models
- **Testing**: Automated API testing based on documented schemas
- **Future Integrations**: Third-party integrations and potential public API
- **Developer Experience**: Interactive documentation for development workflow
- **Maintenance**: Living documentation that stays current with API changes

## Decision

We will use **OpenAPI 3.0 (Swagger) with Fastify Swagger plugin** for API documentation and specification.

### Selected Documentation Stack:

- **Specification**: OpenAPI 3.0 standard with JSON Schema
- **Generation**: Fastify Swagger plugin (auto-generated from route schemas)
- **Interactive UI**: Swagger UI for interactive API exploration
- **Development**: Fastify schema validation ensures doc accuracy
- **CI/CD**: Automated documentation generation and deployment

## Options Considered

### API Documentation Approaches
| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **OpenAPI/Swagger** ✅ | • Industry standard<br>• Interactive documentation<br>• Code generation capabilities<br>• Rich tooling ecosystem<br>• Schema validation | • Initial setup complexity<br>• Maintenance overhead<br>• Schema verbosity | **SELECTED** |
| API Blueprint | • Markdown-based<br>• Human-readable<br>• Good tooling support | • Less widespread adoption<br>• Limited interactive features<br>• Smaller ecosystem | Rejected |
| GraphQL Schema | • Self-documenting<br>• Type-safe<br>• Introspection built-in | • Different API paradigm<br>• Complex for simple APIs<br>• Learning curve | Future Consideration |
| Custom Documentation | • Full control<br>• Tailored to needs<br>• Simple implementation | • High maintenance burden<br>• No standard format<br>• Limited tooling | Rejected |

### Documentation Generation
| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **Fastify Swagger Plugin** ✅ | • Auto-generation from schemas<br>• Always up-to-date<br>• Minimal maintenance<br>• Fastify-native integration | • Tied to Fastify<br>• Limited customization<br>• Plugin dependencies | **SELECTED** |
| Manual OpenAPI | • Full control<br>• Rich descriptions<br>• Custom examples | • High maintenance<br>• Sync issues<br>• Documentation drift | Rejected |
| Code Annotations | • Close to source<br>• Developer-friendly<br>• Good tooling | • Annotation overhead<br>• Limited schema features<br>• Framework coupling | Rejected |

## Rationale

### Why OpenAPI 3.0?
1. **Industry Standard**: Widely adopted specification with excellent tooling
2. **Interactive Documentation**: Swagger UI provides excellent developer experience
3. **Schema Validation**: Same schemas used for runtime validation and documentation
4. **Code Generation**: Client SDKs and server stubs can be generated
5. **Testing Integration**: Automated API testing based on documented contracts

### Why Fastify Swagger Plugin?
1. **Auto-generation**: Documentation generated from route schemas automatically
2. **Always Current**: Documentation stays in sync with actual API implementation
3. **Type Safety**: Leverages Fastify's JSON Schema validation
4. **Zero Maintenance**: No separate documentation files to maintain
5. **Development Integration**: Works seamlessly with existing Fastify setup

### OpenAPI Benefits for SkillTree
```typescript
// Route schema automatically generates OpenAPI spec
const skillTreeRoutes = async (fastify: FastifyInstance) => {
  await fastify.register(async function (fastify) {
    fastify.get('/skill-trees/:treeId', {
      schema: {
        description: 'Get a specific skill tree with all skills and dependencies',
        tags: ['Skill Trees'],
        params: {
          type: 'object',
          required: ['treeId'],
          properties: {
            treeId: {
              type: 'string',
              description: 'Unique identifier for the skill tree'
            }
          }
        },
        response: {
          200: {
            description: 'Skill tree details with skills and dependencies',
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              description: { type: 'string' },
              skills: {
                type: 'array',
                items: { $ref: 'SkillSchema#' }
              }
            }
          },
          404: {
            description: 'Skill tree not found',
            $ref: 'ErrorSchema#'
          }
        }
      }
    }, async (request, reply) => {
      // Route handler implementation
    });
  });
};
```

## Consequences

### Positive
- **Developer Experience**: Interactive documentation improves development workflow
- **API Consistency**: Schema-driven development ensures consistent API design
- **Testing**: Automated contract testing based on OpenAPI specifications
- **Integration**: Easy third-party integration with standard API documentation
- **Maintenance**: Documentation automatically stays current with code changes

### Negative
- **Schema Complexity**: Detailed schemas require more upfront development time
- **Plugin Dependency**: Tied to Fastify ecosystem for auto-generation
- **Limited Customization**: Less control over documentation presentation

### Risks and Mitigation
- **Risk**: Documentation becomes too technical for non-developers
  - **Mitigation**: Add business context and examples alongside technical specs
- **Risk**: Schema complexity slows development
  - **Mitigation**: Start with basic schemas and enhance incrementally
- **Risk**: Plugin compatibility issues
  - **Mitigation**: Keep plugins updated and have fallback to manual generation

## API Documentation Structure

### OpenAPI Specification Structure
```yaml
openapi: 3.0.3
info:
  title: SkillTree API
  description: |
    SkillTree API provides endpoints for managing skill trees, user progress,
    and gamified learning experiences.
  version: 1.0.0
  contact:
    name: SkillTree Team
    email: api@skilltree.dev
  license:
    name: MIT

servers:
  - url: https://api.skilltree.dev/v1
    description: Production API
  - url: https://staging-api.skilltree.dev/v1
    description: Staging API
  - url: http://localhost:3000/api/v1
    description: Development API

paths:
  /auth/login:
    post:
      tags: [Authentication]
      summary: User login
      description: Authenticate user with email and password

  /skill-trees:
    get:
      tags: [Skill Trees]
      summary: List skill trees
      description: Get paginated list of available skill trees

components:
  schemas:
    User:
      type: object
      required: [id, email, name]
      properties:
        id:
          type: string
          format: cuid
          example: "usr_abc123def456"
        email:
          type: string
          format: email
          example: "user@example.com"
        name:
          type: string
          minLength: 1
          maxLength: 100
          example: "John Doe"

  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
```

### Schema Organization
```typescript
// Reusable schemas for consistency
const commonSchemas = {
  ErrorSchema: {
    $id: 'ErrorSchema',
    type: 'object',
    required: ['error', 'statusCode'],
    properties: {
      error: { type: 'string' },
      message: { type: 'string' },
      statusCode: { type: 'number' }
    }
  },

  UserSchema: {
    $id: 'UserSchema',
    type: 'object',
    required: ['id', 'email', 'name'],
    properties: {
      id: { type: 'string', format: 'cuid' },
      email: { type: 'string', format: 'email' },
      name: { type: 'string', minLength: 1, maxLength: 100 }
    }
  },

  SkillSchema: {
    $id: 'SkillSchema',
    type: 'object',
    required: ['id', 'name', 'level'],
    properties: {
      id: { type: 'string', format: 'cuid' },
      name: { type: 'string', minLength: 1, maxLength: 200 },
      description: { type: 'string', maxLength: 1000 },
      level: { type: 'integer', minimum: 1, maximum: 5 },
      dependencies: {
        type: 'array',
        items: { type: 'string', format: 'cuid' }
      }
    }
  }
};
```

## Fastify Integration

### Swagger Plugin Configuration
```typescript
// Fastify Swagger setup
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

export const registerSwagger = async (fastify: FastifyInstance) => {
  await fastify.register(swagger, {
    openapi: {
      openapi: '3.0.3',
      info: {
        title: 'SkillTree API',
        description: 'Gamified learning platform API',
        version: '1.0.0',
        contact: {
          name: 'SkillTree Team',
          email: 'api@skilltree.dev'
        }
      },
      servers: [
        {
          url: process.env.API_BASE_URL || 'http://localhost:3000',
          description: 'API Server'
        }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        }
      }
    },
    refResolver: {
      buildLocalReference(json, baseUri, fragment, i) {
        return `${json.$id}`;
      }
    }
  });

  await fastify.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: true,
      defaultModelsExpandDepth: 2,
      defaultModelExpandDepth: 2
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject) => {
      return swaggerObject;
    }
  });
};
```

### Route Schema Examples
```typescript
// Authentication endpoints with full schema
const authRoutes = async (fastify: FastifyInstance) => {
  fastify.post('/login', {
    schema: {
      description: 'Authenticate user with email and password',
      tags: ['Authentication'],
      body: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
            format: 'email',
            description: 'User email address'
          },
          password: {
            type: 'string',
            minLength: 8,
            description: 'User password (minimum 8 characters)'
          }
        }
      },
      response: {
        200: {
          description: 'Successful authentication',
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            expiresIn: { type: 'number' },
            tokenType: { type: 'string', enum: ['Bearer'] },
            user: { $ref: 'UserSchema#' }
          }
        },
        401: {
          description: 'Invalid credentials',
          $ref: 'ErrorSchema#'
        },
        429: {
          description: 'Too many login attempts',
          $ref: 'ErrorSchema#'
        }
      }
    }
  }, loginHandler);
};
```

## Documentation Quality Standards

### Content Guidelines
- **Clear Descriptions**: Every endpoint has purpose and usage description
- **Complete Examples**: Request/response examples for all endpoints
- **Error Documentation**: All possible error responses documented
- **Business Context**: Explain the business purpose, not just technical details
- **Parameter Details**: Full parameter validation and format specifications

### Schema Best Practices
```typescript
// Good schema with validation and documentation
const createSkillSchema = {
  description: 'Create a new skill in a skill tree',
  tags: ['Skills'],
  security: [{ bearerAuth: [] }],
  params: {
    type: 'object',
    required: ['treeId'],
    properties: {
      treeId: {
        type: 'string',
        format: 'cuid',
        description: 'ID of the skill tree to add the skill to'
      }
    }
  },
  body: {
    type: 'object',
    required: ['name', 'level'],
    properties: {
      name: {
        type: 'string',
        minLength: 1,
        maxLength: 200,
        description: 'Skill name (must be unique within the tree)',
        examples: ['JavaScript Basics', 'Advanced React Patterns']
      },
      description: {
        type: 'string',
        maxLength: 1000,
        description: 'Detailed skill description and learning outcomes'
      },
      level: {
        type: 'integer',
        minimum: 1,
        maximum: 5,
        description: 'Skill difficulty level (1=Beginner, 5=Expert)'
      },
      dependencies: {
        type: 'array',
        items: { type: 'string', format: 'cuid' },
        description: 'Array of skill IDs that must be completed first',
        maxItems: 10
      }
    }
  }
};
```

## Developer Workflow Integration

### Development Process
1. **Schema-First Development**: Define API schema before implementation
2. **Validation**: Fastify validates requests against documented schemas
3. **Testing**: API tests based on OpenAPI specifications
4. **Review**: Documentation review as part of code review process
5. **Deployment**: Documentation automatically deployed with API

### IDE Integration
- **Schema Validation**: Real-time schema validation in development
- **Autocomplete**: Schema-based autocomplete for API requests
- **Type Generation**: TypeScript types generated from schemas
- **Testing Support**: Test templates generated from documentation

## Implementation Plan

### Phase 1: Foundation Setup (Week 2)
- [ ] Install and configure Fastify Swagger plugin
- [ ] Set up basic OpenAPI specification structure
- [ ] Create common schema definitions (User, Error, etc.)
- [ ] Configure Swagger UI with custom styling
- [ ] Set up automated documentation generation

### Phase 2: Core API Documentation (Week 2-3)
- [ ] Document authentication endpoints with full schemas
- [ ] Create skill tree API documentation
- [ ] Add user management endpoint documentation
- [ ] Implement comprehensive error response schemas
- [ ] Add request/response examples for all endpoints

### Phase 3: Advanced Features (Week 3-4)
- [ ] Add API versioning documentation
- [ ] Create client SDK generation scripts
- [ ] Implement API testing based on OpenAPI specs
- [ ] Set up documentation deployment pipeline
- [ ] Add interactive examples and tutorials

### Phase 4: Quality and Maintenance (Week 4-5)
- [ ] Create documentation review checklist
- [ ] Set up documentation linting and validation
- [ ] Add performance metrics for documented endpoints
- [ ] Create API changelog and migration guides
- [ ] Establish documentation maintenance procedures

## Documentation Hosting and Access

### Development Environment
- **Local Access**: `http://localhost:3000/docs` for development
- **Hot Reload**: Documentation updates with code changes
- **Debug Mode**: Enhanced error information in development
- **Schema Validation**: Real-time schema validation feedback

### Production Environment
- **Public Access**: `https://api.skilltree.dev/docs` for public documentation
- **Authentication**: Some endpoints require auth to test
- **Rate Limiting**: Documentation respects API rate limits
- **Monitoring**: Track documentation usage and popular endpoints

## Quality Assurance

### Documentation Testing
- **Schema Validation**: Automated validation of all schemas
- **Example Testing**: All examples tested for accuracy
- **Link Checking**: All internal links verified automatically
- **Contract Testing**: API responses match documented schemas

### Maintenance Procedures
- **Regular Reviews**: Monthly documentation quality reviews
- **User Feedback**: Collect and act on developer feedback
- **Analytics**: Track which endpoints and examples are most used
- **Updates**: Keep documentation current with API changes

---

**Decision Status**: ✅ **APPROVED** by Product Owner on 2025-09-13
**Next Review**: Sprint 2 (Week 4) - Developer experience assessment and usage analytics
**Related ADRs**: ADR-002 (Backend), ADR-006 (Testing), ADR-001 (Frontend Integration)