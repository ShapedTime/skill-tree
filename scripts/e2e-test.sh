#!/bin/bash

# E2E Test Runner Script
# This script manages the full E2E test lifecycle with Docker Compose

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$SCRIPT_DIR/.."
DOCKER_COMPOSE_FILE="$PROJECT_ROOT/infra/development/docker-compose.e2e.yml"
WEB_APP_DIR="$PROJECT_ROOT/projects/web-app"
API_GATEWAY_DIR="$PROJECT_ROOT/projects/api-gateway"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

echo_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

echo_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if services are healthy
check_services() {
    echo_info "Checking service health..."

    # Check PostgreSQL
    docker-compose -f "$DOCKER_COMPOSE_FILE" exec -T postgres-e2e pg_isready -U skilltree -d skilltree_e2e > /dev/null 2>&1 || {
        echo_error "PostgreSQL is not ready"
        return 1
    }

    # Check Redis
    docker-compose -f "$DOCKER_COMPOSE_FILE" exec -T redis-e2e redis-cli ping > /dev/null 2>&1 || {
        echo_error "Redis is not ready"
        return 1
    }

    # Check API Gateway
    curl -f http://localhost:8001/api/health > /dev/null 2>&1 || {
        echo_error "API Gateway is not ready"
        return 1
    }

    # Check Frontend
    curl -f http://localhost:3001 > /dev/null 2>&1 || {
        echo_error "Frontend is not ready"
        return 1
    }

    echo_info "All services are healthy ✅"
    return 0
}

# Function to seed database
seed_database() {
    echo_info "Seeding database with test data..."
    cd "$API_GATEWAY_DIR"
    DATABASE_URL="postgresql://skilltree:dev_password@localhost:5433/skilltree_e2e?schema=public" npm run db:seed:e2e
    echo_info "Database seeded successfully ✅"
}

# Function to start services
start_services() {
    echo_info "Starting Docker Compose services..."
    docker-compose -f "$DOCKER_COMPOSE_FILE" up -d --build

    echo_info "Waiting for services to be ready..."
    sleep 10

    # Retry health checks up to 30 seconds
    for i in {1..6}; do
        if check_services; then
            return 0
        fi
        echo_warn "Services not ready yet, retrying in 5 seconds... (attempt $i/6)"
        sleep 5
    done

    echo_error "Services failed to start properly"
    return 1
}

# Function to stop services
stop_services() {
    echo_info "Stopping Docker Compose services..."
    docker-compose -f "$DOCKER_COMPOSE_FILE" down -v
    echo_info "Services stopped and volumes removed ✅"
}

# Function to show logs
show_logs() {
    echo_info "Showing service logs..."
    docker-compose -f "$DOCKER_COMPOSE_FILE" logs
}

# Function to run tests
run_tests() {
    echo_info "Running E2E tests with Playwright..."
    cd "$WEB_APP_DIR"

    # Use the Docker config for Playwright
    npm run test:e2e:docker

    TEST_EXIT_CODE=$?

    if [ $TEST_EXIT_CODE -eq 0 ]; then
        echo_info "E2E tests passed successfully ✅"
    else
        echo_error "E2E tests failed ❌"
    fi

    return $TEST_EXIT_CODE
}

# Main execution
case "${1:-full}" in
    start)
        start_services
        seed_database
        ;;
    stop)
        stop_services
        ;;
    test)
        run_tests
        ;;
    logs)
        show_logs
        ;;
    full)
        echo_info "Running full E2E test suite..."

        # Ensure clean state
        stop_services 2>/dev/null || true

        # Start services
        if ! start_services; then
            echo_error "Failed to start services"
            show_logs
            stop_services
            exit 1
        fi

        # Seed database
        if ! seed_database; then
            echo_error "Failed to seed database"
            show_logs
            stop_services
            exit 1
        fi

        # Run tests
        run_tests
        TEST_RESULT=$?

        # Clean up
        echo_info "Cleaning up..."
        stop_services

        exit $TEST_RESULT
        ;;
    *)
        echo "Usage: $0 {start|stop|test|logs|full}"
        echo ""
        echo "  start - Start Docker services and seed database"
        echo "  stop  - Stop Docker services and remove volumes"
        echo "  test  - Run E2E tests (services must be running)"
        echo "  logs  - Show service logs"
        echo "  full  - Run complete E2E test cycle (default)"
        exit 1
        ;;
esac