# ADR-004: Authentication Strategy

**Status**: Accepted
**Date**: 2025-09-13
**Decision Makers**: Software Architect, Product Owner
**Consulted**: Development Team, Security Review
**Informed**: All Stakeholders

## Context

SkillTree requires a secure, scalable authentication system that supports:

- **User Registration**: Account creation with email verification
- **Secure Login**: Password-based authentication with security best practices
- **Session Management**: Stateless authentication for API scalability
- **PWA Support**: Offline-capable authentication with token refresh
- **Security Requirements**: Industry-standard security measures
- **Future Social Login**: Extensible for OAuth providers (Google, GitHub)

## Decision

We will implement **JWT (JSON Web Tokens) with Refresh Token architecture** for authentication.

### Selected Authentication Strategy:

- **Primary Authentication**: JWT access tokens (short-lived, 15 minutes)
- **Session Persistence**: Refresh tokens (long-lived, 7 days)
- **Password Security**: Argon2id hashing with salt
- **Token Storage**: HttpOnly cookies for refresh tokens, memory for access tokens
- **Token Validation**: HMAC-SHA256 signing with rotating secrets

## Options Considered

### Authentication Approaches
| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **JWT + Refresh Tokens** ✅ | • Stateless scalability<br>• Perfect for APIs<br>• Offline capability<br>• Cross-service compatible<br>• Industry standard | • Token management complexity<br>• Refresh logic required<br>• Secret rotation needed | **SELECTED** |
| Session Cookies | • Simple implementation<br>• Automatic CSRF protection<br>• Browser handles storage | • Server-side session storage<br>• Scaling complexity<br>• Poor API support | Rejected |
| OAuth2 Only | • Secure, battle-tested<br>• Third-party handled<br>• No password storage | • External dependencies<br>• Complex for simple use case<br>• Privacy concerns | Future Enhancement |

### Password Hashing
| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **Argon2id** ✅ | • Latest OWASP recommendation<br>• Memory-hard function<br>• Resistant to GPU attacks<br>• Configurable parameters | • Higher CPU usage<br>• Newer than alternatives | **SELECTED** |
| bcrypt | • Well-established<br>• Good library support<br>• Proven security | • Not memory-hard<br>• Vulnerable to specialized hardware | Rejected |
| PBKDF2 | • NIST standard<br>• Hardware implementation | • Not memory-hard<br>• Slower than Argon2 | Rejected |

## Rationale

### Why JWT + Refresh Tokens?
1. **Stateless Architecture**: No server-side session storage required
2. **API-First Design**: Perfect for React PWA and future mobile apps
3. **Scalability**: Tokens validated without database queries
4. **Offline Support**: Cached tokens work when PWA is offline
5. **Microservice Ready**: Tokens work across service boundaries

### Security Architecture
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  React PWA      │    │   Fastify API    │    │  PostgreSQL DB  │
│                 │    │                  │    │                 │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │Access Token │ │◄───┤ │JWT Generator │ │    │ │User Records │ │
│ │(Memory)     │ │    │ │              │ │    │ │             │ │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
│                 │    │                  │    │                 │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │Refresh Token│ │◄───┤ │Token Store   │ │◄───┤ │Refresh      │ │
│ │(HttpOnly)   │ │    │ │              │ │    │ │Tokens       │ │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Token Strategy Details
- **Access Token**: Contains user ID, roles, permissions (15min expiry)
- **Refresh Token**: Secure random string, database-stored (7 day expiry)
- **Token Rotation**: New refresh token issued with each access token refresh
- **Revocation**: Refresh tokens can be instantly revoked from database

## Consequences

### Positive
- **Performance**: No database queries for token validation
- **Scalability**: Stateless authentication scales horizontally
- **Security**: Short-lived access tokens minimize exposure window
- **User Experience**: Automatic token refresh provides seamless experience
- **PWA Support**: Works perfectly with offline-first architecture

### Negative
- **Complexity**: More complex than simple session-based auth
- **Token Management**: Frontend must handle token refresh logic
- **Secret Management**: JWT secrets require secure storage and rotation

### Risks and Mitigation
- **Risk**: JWT secret compromise exposes all tokens
  - **Mitigation**: Secret rotation every 90 days, proper secret storage
- **Risk**: Refresh token theft allows persistent access
  - **Mitigation**: HttpOnly cookies, token rotation, device fingerprinting
- **Risk**: Token bloat with user permissions
  - **Mitigation**: Minimal token payload, permission lookups when needed

## Security Implementation

### Password Security
```typescript
// Argon2id configuration
const argon2Config = {
  type: argon2.argon2id,
  memoryCost: 65536,      // 64 MB
  timeCost: 3,            // 3 iterations
  parallelism: 4,         // 4 parallel threads
  saltLength: 32,         // 32 byte salt
};

// Password hashing
const hash = await argon2.hash(password, argon2Config);

// Password verification
const isValid = await argon2.verify(hash, password);
```

### JWT Token Structure
```typescript
// Access Token Payload
interface AccessTokenPayload {
  sub: string;           // User ID
  email: string;         // User email
  roles: string[];       // User roles
  iat: number;          // Issued at
  exp: number;          // Expires at (15 minutes)
  aud: 'skilltree-api'; // Audience
  iss: 'skilltree';     // Issuer
}

// Refresh Token Database Record
interface RefreshToken {
  id: string;
  userId: string;
  tokenHash: string;    // SHA-256 hash of actual token
  expiresAt: Date;      // 7 days from creation
  deviceInfo: string;   // User agent hash for security
  createdAt: Date;
  lastUsedAt: Date;
}
```

### API Security Headers
```typescript
// Security headers for all responses
{
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "default-src 'self'",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
}
```

## API Endpoints Design

### Authentication Endpoints
```typescript
POST /api/v1/auth/register
{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe"
}

POST /api/v1/auth/login
{
  "email": "user@example.com",
  "password": "securePassword123"
}

POST /api/v1/auth/refresh
// Uses HttpOnly refresh token from cookies

POST /api/v1/auth/logout
// Revokes refresh token

POST /api/v1/auth/logout-all
// Revokes all user refresh tokens
```

### Response Format
```typescript
// Successful login response
{
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": 900,  // 15 minutes in seconds
  "tokenType": "Bearer",
  "user": {
    "id": "usr_abc123",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
// Refresh token set as HttpOnly cookie
```

## Frontend Integration

### Token Storage Strategy
- **Access Token**: Stored in memory (React context/state)
- **Refresh Token**: HttpOnly cookie (automatic browser handling)
- **Token Refresh**: Automatic refresh 2 minutes before expiry
- **Error Handling**: Redirect to login on refresh failure

### Axios Interceptor Example
```typescript
// Automatic token refresh interceptor
api.interceptors.request.use(async (config) => {
  const token = getAccessToken();
  if (token && isTokenExpiringSoon(token)) {
    await refreshAccessToken();
  }
  config.headers.Authorization = `Bearer ${getAccessToken()}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const success = await refreshAccessToken();
      if (success) {
        // Retry original request
        return api.request(error.config);
      } else {
        // Redirect to login
        redirectToLogin();
      }
    }
    return Promise.reject(error);
  }
);
```

## Implementation Plan

### Phase 1: Core Authentication (Week 2-3)
- [ ] Set up JWT library with proper configuration
- [ ] Implement Argon2id password hashing
- [ ] Create user registration with email validation
- [ ] Build login endpoint with token generation
- [ ] Add refresh token database schema and operations

### Phase 2: Security Hardening (Week 3)
- [ ] Implement rate limiting for auth endpoints
- [ ] Add device fingerprinting for security
- [ ] Set up security headers and CORS
- [ ] Create token revocation mechanisms
- [ ] Add comprehensive input validation

### Phase 3: Frontend Integration (Week 3-4)
- [ ] Build React authentication context
- [ ] Implement automatic token refresh logic
- [ ] Create login/register UI components
- [ ] Add protected route handling
- [ ] Test offline authentication scenarios

### Phase 4: Advanced Features (Week 4-5)
- [ ] Add "Remember Me" extended refresh tokens
- [ ] Implement password reset flow
- [ ] Add account deletion and data cleanup
- [ ] Create admin user management features
- [ ] Set up audit logging for auth events

## Security Checklist

### OWASP Compliance
- [ ] **A01 - Broken Access Control**: Proper authorization checks
- [ ] **A02 - Cryptographic Failures**: Strong hashing and JWT signing
- [ ] **A03 - Injection**: Parameterized queries and input validation
- [ ] **A07 - Identification Failures**: Secure authentication implementation
- [ ] **A09 - Security Logging**: Comprehensive auth event logging

### Additional Security Measures
- [ ] Rate limiting: 5 login attempts per 15 minutes per IP
- [ ] Password policy: 8+ characters, mixed case, numbers, symbols
- [ ] Account lockout: Temporary lockout after failed attempts
- [ ] Email verification: Required for new account activation
- [ ] Session security: Secure, HttpOnly, SameSite cookie attributes

## Monitoring and Compliance

### Authentication Metrics
- **Login Success Rate**: Track successful vs failed login attempts
- **Token Refresh Rate**: Monitor refresh token usage patterns
- **Security Events**: Failed logins, token abuse, unusual patterns
- **Performance**: Authentication endpoint response times

### Compliance Considerations
- **GDPR**: User data deletion and export capabilities
- **Privacy**: Minimal data collection and secure storage
- **Audit Trail**: Comprehensive logging of authentication events
- **Data Retention**: Automatic cleanup of expired tokens and logs

---

**Decision Status**: ✅ **APPROVED** by Product Owner on 2025-09-13
**Next Review**: Sprint 2 (Week 4) - Security audit and performance assessment
**Related ADRs**: ADR-002 (Backend), ADR-003 (Database), ADR-001 (Frontend)