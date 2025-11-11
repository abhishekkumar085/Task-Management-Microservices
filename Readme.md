## Container Management

```
docker ps - List running containers
docker ps -a - List all containers (including stopped)
docker run <image> - Create & start a container from an image
docker start <container> - Start an existing stopped container
docker stop <container> - Stop a running container
docker restart <container> - Restart a container
docker rm <container> - Remove a stopped container
docker logs <container> - Show container logs (stdout & stderr)
docker exec -it <container> - /bin/bash Open an interactive shell inside a running container
docker inspect <container> - Show detailed info (network, env, volumes, etc.)

```

## 🐳 Image Management

```
docker images -	List all local images
docker build -t <name> . -	Build an image from a Dockerfile
docker pull <image> -	Download image from Docker Hub
docker push <image> -	Upload image to Docker Hub
docker rmi <image> -	Remove an image
docker image prune -	Delete unused images to free space

```

## 🧩 Docker Compose

```
docker-compose up -	Start all services (logs in same terminal)
docker-compose up -d -	Start in detached mode (background)
docker-compose down -	Stop & remove all containers
docker-compose down -v -	Also remove volumes
docker-compose build -	Build/rebuild all images
docker-compose ps -	List containers managed by Compose
docker-compose logs -	Show logs from all services
docker-compose logs -f -	Follow logs live (like tail -f)

```

## Volumes & Networks

```
docker volume ls -	List all Docker volumes
docker volume rm <volume> - Remove a specific volume
docker volume prune -	Remove all unused volumes
docker network ls -	List all Docker networks
docker network inspect <network> -	Show details of a network
docker network prune  -	Remove unused networks

```

## Cleanup & Maintenance

```
docker system df -	Show disk usage by Docker
docker system prune -	Remove unused containers, networks, images
docker system prune -a -	Remove all unused data (images + containers + networks)
docker stats -	Live resource usage (CPU, RAM, etc.) of containers
docker top <container> -	Show running processes inside container

```
