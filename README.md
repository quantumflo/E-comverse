# E-comverse

E-comverse e-commerce platform built using modern microservices architecture. The platform includes services for handling inventory, notifications, orders, and products, with a user-friendly frontend that allows secure login through Keycloak.

## Tech Stack

- **Frontend:**
  - React
  - Styled Components

- **Backend:**
  - Java
  - Spring Boot
  - MongoDB
  - MySQL
  - Kafka (Asynchronous communication between services)
  - Keycloak (Authentication and Authorization)

- **Infrastructure & DevOps:**
  - Docker
  - Kubernetes (using Kind for local clusters)
  - Test Containers with Wiremock for integration testing
  - Grafana Stack for monitoring and logging:
    - Prometheus (metrics)
    - Grafana (visualization)
    - Loki (log aggregation)
    - Tempo (distributed tracing)

- **API Gateway:**
  - Spring Cloud Gateway MVC (for routing between microservices)

## Microservices Architecture

The backend is built using a microservices architecture, with each service having its own database and functionality.

### Services:
- **Inventory Service:** Manages stock levels for products.
- **Notification Service:** Sends notifications ( Email ) to users.
- **Order Service:** Manages customer orders and payments.
- **Product Service:** Manages product information and pricing.

## Features
- **Login:** Secure authentication and authorization using Keycloak.
- **Frontend:** Built with React and styled-components for a seamless user experience.
- **Backend:** Scalable microservices handling core e-commerce functionalities.
- **Monitoring:** Full observability with Grafana, Prometheus, Loki, and Tempo.

## Setup Instructions

### Prerequisites
- Docker
- Kubernetes (Kind)
- Node.js
- Java 21
- Maven

