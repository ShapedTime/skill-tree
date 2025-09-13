# Docker Implementation Specification

**Document**: Technical Implementation Guide for Docker Development Environment
**Date**: 2025-09-14
**Architect**: Claude (Software Architect Role)
**Related**: ADR-001, Issue #3

## Overview

This document provides detailed technical specifications for implementing the Docker development environment for the SkillTree project. It includes exact configurations, file structures, and implementation details for the Software Engineer.

## File Structure Implementation

### Required Directory Creation

```
skill-tree/
├── docker/
│   ├── development/
│   ├── production/
│   └── scripts/
├── projects/
│   ├── web-app/
│   └── api-gateway/
└── shared/
    ├── database/
    │   └── init/
    └── configs/
        ├── nginx/
        └── redis/
```

## Service Configurations

### 1. Docker Compose Configuration

**File**: `/docker/development/docker-compose.yml`

```yaml
version: '3.8'

networks:
  skilltree-network:
    driver: bridge

volumes:
  postgres_data:
    driver: local
  redis_data:
    driver: local

services:
  # Frontend Service
  frontend:
    build:
      context: ../../projects/web-app
      dockerfile: Dockerfile.dev
    ports:
      - "${FRONTEND_PORT:-3000}:3000"
    volumes:
      - ../../projects/web-app:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
      - VITE_API_URL=http://localhost:${BACKEND_PORT:-8000}
      - VITE_APP_NAME=SkillTree
    networks:
      - skilltree-network
    depends_on:
      - backend
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Backend Service
  backend:
    build:
      context: ../../projects/api-gateway
      dockerfile: Dockerfile.dev
    ports:
      - "${BACKEND_PORT:-8000}:8000"
    volumes:
      - ../../projects/api-gateway:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
      - PORT=8000
      - DATABASE_URL=postgresql://${POSTGRES_USER:-skilltree}:${POSTGRES_PASSWORD:-dev_password}@postgres:5432/${POSTGRES_DB:-skilltree_dev}
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=${JWT_SECRET:-dev_jwt_secret_change_in_production}
    networks:
      - skilltree-network
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  # PostgreSQL Database
  postgres:
    image: postgres:15-alpine
    ports:
      - "${POSTGRES_PORT:-5432}:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ../../shared/database/init:/docker-entrypoint-initdb.d
    environment:
      - POSTGRES_USER=${POSTGRES_USER:-skilltree}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-dev_password}
      - POSTGRES_DB=${POSTGRES_DB:-skilltree_dev}
    networks:
      - skilltree-network
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER:-skilltree}"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Redis Cache
  redis:
    image: redis:7-alpine
    ports:
      - "${REDIS_PORT:-6379}:6379"
    volumes:
      - redis_data:/data
      - ../../shared/configs/redis/redis.conf:/usr/local/etc/redis/redis.conf
    command: redis-server /usr/local/etc/redis/redis.conf
    networks:
      - skilltree-network
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 3

  # Development Tools
  adminer:
    image: adminer:latest
    ports:
      - "${ADMINER_PORT:-8080}:8080"
    environment:
      - ADMINER_DEFAULT_SERVER=postgres
    networks:
      - skilltree-network
    depends_on:
      - postgres
    restart: unless-stopped
    profiles:
      - tools

  redis-commander:
    image: rediscommander/redis-commander:latest
    ports:
      - "${REDIS_COMMANDER_PORT:-8081}:8081"
    environment:
      - REDIS_HOSTS=local:redis:6379
    networks:
      - skilltree-network
    depends_on:
      - redis
    restart: unless-stopped
    profiles:
      - tools
```

### 2. Environment Configuration

**File**: `/docker/development/.env.example`

```env
# Application Configuration
NODE_ENV=development
APP_NAME=SkillTree

# Service Ports
FRONTEND_PORT=3000
BACKEND_PORT=8000
POSTGRES_PORT=5432
REDIS_PORT=6379
ADMINER_PORT=8080
REDIS_COMMANDER_PORT=8081

# Database Configuration
POSTGRES_USER=skilltree
POSTGRES_PASSWORD=dev_password
POSTGRES_DB=skilltree_dev

# Authentication
JWT_SECRET=dev_jwt_secret_change_in_production
JWT_EXPIRES_IN=24h

# External APIs
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here

# Development Settings
LOG_LEVEL=debug
ENABLE_CORS=true
```

### 3. Dockerfiles

#### Frontend Dockerfile
**File**: `/projects/web-app/Dockerfile.dev`

```dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies for building node modules
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=development

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
```

#### Backend Dockerfile
**File**: `/projects/api-gateway/Dockerfile.dev`

```dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies for building node modules
RUN apk add --no-cache python3 make g++ curl

# Copy package files
COPY package*.json ./

# Install dependencies including dev dependencies for nodemon
RUN npm ci

# Copy source code
COPY . .

# Expose port
EXPOSE 8000

# Start development server with nodemon
CMD ["npm", "run", "dev"]
```

### 4. Database Initialization

**File**: `/shared/database/init/01-init.sql`

```sql
-- SkillTree Database Initialization
-- This script sets up the initial database structure

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create skill_trees table
CREATE TABLE IF NOT EXISTS skill_trees (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    skill_id UUID NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    tree_data JSONB NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create user_progress table
CREATE TABLE IF NOT EXISTS user_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    tree_id UUID NOT NULL REFERENCES skill_trees(id) ON DELETE CASCADE,
    node_id VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'not_started',
    completion_method VARCHAR(100),
    completion_data JSONB,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_skill_trees_user_id ON skill_trees(user_id);
CREATE INDEX IF NOT EXISTS idx_skill_trees_skill_id ON skill_trees(skill_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_tree_id ON user_progress(tree_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_node_id ON user_progress(node_id);

-- Insert default skills for testing
INSERT INTO skills (name, category, description) VALUES
('JavaScript Programming', 'Programming', 'Learn modern JavaScript development'),
('Guitar Playing', 'Music', 'Master acoustic and electric guitar'),
('Data Science', 'Analytics', 'Data analysis and machine learning'),
('Digital Photography', 'Creative', 'Photography techniques and post-processing')
ON CONFLICT DO NOTHING;
```

### 5. Redis Configuration

**File**: `/shared/configs/redis/redis.conf`

```conf
# Redis Configuration for Development
# Based on Redis 7.x

# Network
bind 0.0.0.0
port 6379
timeout 0
tcp-keepalive 300

# General
daemonize no
supervised no
pidfile /var/run/redis_6379.pid
loglevel notice
databases 16

# Snapshotting
save 900 1
save 300 10
save 60 10000
stop-writes-on-bgsave-error yes
rdbcompression yes
rdbchecksum yes
dbfilename dump.rdb
dir /data

# Security
# requirepass your_redis_password_here

# Memory Management
maxmemory-policy allkeys-lru

# Append Only File
appendonly yes
appendfilename "appendonly.aof"
appendfsync everysec
no-appendfsync-on-rewrite no
auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb
```

### 6. Development Scripts

#### Setup Script
**File**: `/docker/scripts/setup.sh`

```bash
#!/bin/bash

# SkillTree Docker Development Environment Setup
set -e

echo "🏗️ Setting up SkillTree Development Environment..."

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f "docker/development/.env" ]; then
    echo "📝 Creating environment configuration..."
    cp docker/development/.env.example docker/development/.env
    echo "✅ Created .env file. Please review and update as needed."
fi

# Create required directories
echo "📁 Creating directory structure..."
mkdir -p projects/web-app
mkdir -p projects/api-gateway
mkdir -p shared/database/init
mkdir -p shared/configs/redis
mkdir -p shared/configs/nginx

# Build and start services
echo "🐳 Building Docker images..."
cd docker/development
docker-compose build

echo "🚀 Starting development services..."
docker-compose up -d postgres redis

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
timeout 60s bash -c 'until docker-compose exec postgres pg_isready -U skilltree; do sleep 2; done'

echo "✅ SkillTree development environment is ready!"
echo ""
echo "🌐 Services available at:"
echo "   Frontend:  http://localhost:3000"
echo "   Backend:   http://localhost:8000"
echo "   Database:  localhost:5432"
echo "   Redis:     localhost:6379"
echo "   Adminer:   http://localhost:8080"
echo ""
echo "📋 Next steps:"
echo "   1. Review and update docker/development/.env"
echo "   2. Run './docker/scripts/start-dev.sh' to start all services"
echo "   3. Access the application at http://localhost:3000"
```

#### Start Development Script
**File**: `/docker/scripts/start-dev.sh`

```bash
#!/bin/bash

# Start SkillTree Development Environment
set -e

echo "🚀 Starting SkillTree Development Environment..."

cd "$(dirname "$0")/../development"

# Start all services
docker-compose up -d

echo "⏳ Waiting for services to be ready..."

# Wait for backend health check
timeout 120s bash -c 'until curl -f http://localhost:8000/health >/dev/null 2>&1; do sleep 2; done'

echo "✅ All services are ready!"
echo ""
echo "🌐 Available services:"
echo "   Frontend:        http://localhost:3000"
echo "   Backend:         http://localhost:8000"
echo "   Database Admin:  http://localhost:8080"
echo "   Redis Admin:     http://localhost:8081"
echo ""
echo "📋 Useful commands:"
echo "   View logs:       docker-compose logs -f"
echo "   Stop services:   docker-compose down"
echo "   Restart:         docker-compose restart [service_name]"
```

#### Logs Script
**File**: `/docker/scripts/logs.sh`

```bash
#!/bin/bash

# View logs for SkillTree services
cd "$(dirname "$0")/../development"

if [ "$1" ]; then
    # Show logs for specific service
    docker-compose logs -f "$1"
else
    # Show logs for all services
    echo "📋 Available services: frontend, backend, postgres, redis"
    echo "💡 Use: $0 [service_name] to view logs for a specific service"
    echo ""
    docker-compose logs -f
fi
```

## Package.json Templates

### Frontend Package.json
**File**: `/projects/web-app/package.json`

```json
{
  "name": "skilltree-frontend",
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.15.0",
    "zustand": "^4.4.1",
    "cytoscape": "^3.26.0",
    "axios": "^1.5.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.15",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.28",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
```

### Backend Package.json
**File**: `/projects/api-gateway/package.json`

```json
{
  "name": "skilltree-backend",
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "nodemon --exec node --loader ts-node/esm ./src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "test": "jest",
    "lint": "eslint src/**/*.ts"
  },
  "dependencies": {
    "fastify": "^4.23.2",
    "@fastify/cors": "^8.3.0",
    "@fastify/jwt": "^7.2.0",
    "@fastify/postgres": "^5.2.2",
    "@fastify/redis": "^6.1.1",
    "bcrypt": "^5.1.1",
    "zod": "^3.22.2",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/node": "^20.5.9",
    "@typescript-eslint/eslint-plugin": "^6.4.1",
    "@typescript-eslint/parser": "^6.4.1",
    "eslint": "^8.47.0",
    "jest": "^29.6.4",
    "nodemon": "^3.0.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.1.6"
  }
}
```

## Health Check Endpoints

### Backend Health Check
**File**: `/projects/api-gateway/src/routes/health.ts`

```typescript
import { FastifyInstance } from 'fastify';

export async function healthRoutes(fastify: FastifyInstance) {
  fastify.get('/health', async (request, reply) => {
    try {
      // Check database connection
      await fastify.pg.query('SELECT 1');

      // Check Redis connection
      await fastify.redis.ping();

      reply.status(200).send({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        services: {
          database: 'connected',
          redis: 'connected'
        }
      });
    } catch (error) {
      reply.status(503).send({
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error.message
      });
    }
  });
}
```

## Development Workflow

### Hot Reload Configuration

1. **Frontend Hot Reload**: Vite dev server with file watching
2. **Backend Hot Reload**: Nodemon monitoring TypeScript files
3. **Volume Mounts**: Source code directories mounted for live updates
4. **Node Modules**: Separate volumes to prevent conflicts

### Debugging Setup

1. **Frontend Debugging**: Browser DevTools, React DevTools
2. **Backend Debugging**: Node.js inspector on port 9229
3. **Database Debugging**: Adminer web interface
4. **Redis Debugging**: Redis Commander web interface

### Performance Optimization

1. **Build Caching**: Docker layer caching for faster rebuilds
2. **Volume Strategy**: Bind mounts for source, named volumes for data
3. **Resource Limits**: Memory and CPU constraints per service
4. **Network Optimization**: Single Docker network for internal communication

## Next Steps

This specification provides all necessary technical details for implementation. The Software Engineer should:

1. Create the directory structure as specified
2. Implement all configuration files exactly as provided
3. Test the complete setup with sample applications
4. Document any issues or required adjustments
5. Ensure all health checks and hot reload functionality work correctly

---

**👤 Performed by**: Claude (Software Architect Role)