<div align="center">
  <h1>Faktenforum</h1>
  <div align="center">
    <a href="https://www.faktenforum.org">Website</a>
  </div>
  <hr />
</div>

# Setup

To set up the Faktenforum Backend for development, follow the instructions below.

## Requirements

- docker version >= 20.10.0
- local firewall disabled or make sure the docker bridge interface can reach the host machine

### Identify your docker bridge

In ubuntu follow this instructions

```bash
# show all network interfaces
ip addr show

# should be a name like br-dffd01a9178f for bridge device
# create allow rule
sudo ufw allow in on br-dffd01a9178f

```

## Environment

First create .env file by copying .env.example to .env
Alter all fields necessary. For local development
all default should work. For production deployment, make sure
all secrets and passwords are changed to proper values.

```bash
cp .env.example .env
```

## Hasura CLI

Hasura is used as graphql endpoint in this project
To install hasura cli look [here](https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/) for controlling hasura on linux use:

```bash
curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash
```

## Traefik, PostgreSQL, Mino, MongoDB, Hasura

This servieces will be started via docker.
Install docker on your system [HowTo](https://docs.docker.com/engine/install/)

To start all needet services run

```bash
docker compose -f docker-compose.local.yml up
```

This will start:
Traefik a reverse proxy which will provide you
with access to all services on localhost domain:

- localhost:8000 -> localhost:3000 (landing page dev server)
- app.localhost:8000 -> localhost:4000 (frontend dev server)
- api.localhost:8000 -> localhost:8083 (backend dev server)
- api.localhost:8000/api/v1/graphql -> hasura (running as docker container)

It also will start the following required services:

- postgreSQL
- mongodDB
- hasura
- minio
- All migration services to update database schemas and Hasura metadata

## Backend App

Install dependencies:

```bash
npm install
```

This project uses [barrelsby](https://www.npmjs.com/package/barrelsby) to generate index files to import the controllers.
Edit `.barreslby.json` to customize it

To start the dev serer run

```bash
npm start

```

# Frontend and Landing Page

To set up these services for development
please follow instructions in respective repositories.

- [landing page](https://github.com/faktenforum/faktenforum-landing)
- [Faktenforum Frontend](https://github.com/faktenforum/faktenforum-frontend)
