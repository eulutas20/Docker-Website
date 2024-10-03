Small Game - DevOps Project
This project is designed as part of an introductory DevOps course, focusing on creating a modular and scalable application using microservices architecture. The project includes two services that are containerized using Docker and orchestrated with Docker Compose.

Project Overview
The goal of this project is to build a simple game while applying DevOps principles such as containerization, orchestration, and service isolation. The application is split into multiple services that can be independently deployed and managed.

Project Structure
comp350-intro-to-devops-project-1-kucuk_oyun-main/
│
└── project/
    ├── docker-compose.yml          # Docker Compose file to manage multiple services
    ├── nginx/                      # NGINX configuration for load balancing and routing
    ├── service-b/                  # First service written in Node.js
    │   ├── Dockerfile              # Dockerfile for service-b
    │   ├── index.js                # Main application logic for service-b
    │   ├── package.json            # Dependencies and scripts for service-b
    │   └── package-lock.json
    ├── service-c/                  # Second service written in Node.js
    │   ├── Dockerfile              # Dockerfile for service-c
    │   ├── index.js                # Main application logic for service-c
    │   ├── package.json            # Dependencies and scripts for service-c
    │   └── package-lock.json
    └── data/                       # Game data (if applicable)
    
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

