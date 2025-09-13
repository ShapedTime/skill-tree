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