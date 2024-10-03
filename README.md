Small Game - DevOps Project
This project is designed as part of an introductory DevOps course, focusing on creating a modular and scalable application using microservices architecture. The project includes two services that are containerized using Docker and orchestrated with Docker Compose.

Project Overview
The goal of this project is to build a simple game while applying DevOps principles such as containerization, orchestration, and service isolation. The application is split into multiple services that can be independently deployed and managed.

Services
1. Service B
Technology: Node.js
Description: This microservice handles a part of the game logic, communicating with other services to ensure game functionality.
Dockerized: Yes (uses a Dockerfile for containerization)

3. Service C
Technology: Node.js
Description: Another microservice that plays a role in game logic, isolated from service-b.
Dockerized: Yes (uses a Dockerfile for containerization)# Docker-Website
The aim of the project is to create a modular and scalable application using DevOps concepts and tools. In this context, two separate microservices (service-b and service-c) are combined.

Project Files
docker-compose.yml: Manages the multi-container Docker setup, allowing the services to be run together.
NGINX: Used for reverse proxying and load balancing between services.
Service B & C: These Node.js services handle different parts of the game logic and are built as independent microservices.

