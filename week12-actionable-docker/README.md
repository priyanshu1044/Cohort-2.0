# Dockerized MongoDB and PostgreSQL Setup

This repository contains Docker configuration files to quickly set up MongoDB and PostgreSQL databases using Docker containers.

## Prerequisites

Before you begin, ensure you have Docker installed on your system. You can download and install Docker from [here](https://www.docker.com/get-started).

## Running MongoDB Container

To run MongoDB in a Docker container, use the following command:

```bash
docker run -d -p 27017:27017 mongo
```

### Explanation

- **-d**: Run in detached mode.
- **-p**: Port mapping (host:container).
  - `27017:27017`: Map port 27017 on the host to port 27017 on the container.

#### Connection String for MongoDB:
```bash
mongodb://localhost:27017
```

## Running PostgreSQL Container

To run PostgreSQL in a Docker container, use the following command:

```bash
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

### Explanation

- **-e POSTGRES_PASSWORD=mysecretpassword**: Set the PostgreSQL user's password to "mysecretpassword".
- **-d**: Run in detached mode.
- **-p**: Port mapping (host:container).
  - `5432:5432`: Map port 5432 on the host to port 5432 on the container.

#### Connection String for PostgreSQL:
```bash
postgresql://postgres:mysecretpassword@localhost:5432/postgres
```
