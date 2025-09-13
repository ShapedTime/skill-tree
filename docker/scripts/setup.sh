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