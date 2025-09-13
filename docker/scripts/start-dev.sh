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