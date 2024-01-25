# mysandbox - Personal Sandbox

Monorepo to try and play around with various "stuff".  
Not particularly in an efficient way 🙂

### Tools

**Dev environment**: NodeJS(Local or Docker Compose)  
**Package manager**: [PNPM](https://pnpm.io/)  
~~**CI/CD**: [Drone](https://www.drone.io/)~~ NOTE: Not used anymore due to
migration to third-party services instead of self-hosted solutions.

### Configuration

Example `.env`:

```dotenv
# NodeJS
IMAGE_VER=20-slim

# Project
## Default package
PROJECT_NAME=vanilla-extract
## Your Host user UID
PROJECT_UID=1000
## Your Host user GID
PROJECT_GID=1000
## Name of the project
COMPOSE_PROJECT_NAME=mysandbox
```

Update `/etc/hosts`:

```
127.0.0.1 mywebentry.docker
127.0.0.1 dev.mywebentry.docker
127.0.0.1 traefik.mywebentry.docker
```
