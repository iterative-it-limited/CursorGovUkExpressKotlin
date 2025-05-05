# GOV.UK Service with Express and Kotlin

This project implements a GOV.UK service using a Node.js Express frontend and a Kotlin Spring Boot backend API.

## Project Structure

```
.
├── frontend/               # Node.js Express frontend
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── views/             # GOV.UK Design System templates
│   └── package.json       # Frontend dependencies
│
├── backend/               # Kotlin Spring Boot API
│   ├── src/               # Source code
│   └── build.gradle.kts   # Kotlin build configuration
│
└── docker/               # Docker configuration
    ├── frontend/         # Frontend Dockerfile
    └── backend/          # Backend Dockerfile
```

## Prerequisites

- Node.js 18.x or later
- JDK 17 or later
- Docker and Docker Compose (for containerized deployment)
- Gradle 7.x or later

## Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   ./gradlew build
   ```

3. Run the application:
   ```bash
   ./gradlew bootRun
   ```

The API will be available at `http://localhost:8080`

### Docker Deployment

To run both services using Docker:

```bash
docker-compose up
```

## Development

- Frontend follows the [GOV.UK Design System](https://design-system.service.gov.uk/) guidelines
- Backend follows Spring Boot best practices and Kotlin coding conventions
- Both services include comprehensive test suites

## License

This project is licensed under the MIT License - see the LICENSE file for details.
