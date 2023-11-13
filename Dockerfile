###############################################################################
###############################################################################
##                      _______ _____ ______ _____                           ##
##                     |__   __/ ____|  ____|  __ \                          ##
##                        | | | (___ | |__  | |  | |                         ##
##                        | |  \___ \|  __| | |  | |                         ##
##                        | |  ____) | |____| |__| |                         ##
##                        |_| |_____/|______|_____/                          ##
##                                                                           ##
## description     : Dockerfile for TsED Application                         ##
## author          : TsED team                                               ##
## date            : 2022-03-05                                              ##
## version         : 2.0                                                     ##
##                                                                           ##
###############################################################################
###############################################################################
ARG NODE_VERSION=20.9

# Build stage
FROM node:${NODE_VERSION}-alpine as build
WORKDIR /opt

# Copy package.json and lock file
COPY package.json package-lock.json tsconfig.json tsconfig.compile.json .barrelsby.json ./

# Install dependencies
RUN npm install --pure-lockfile

# Copy Prisma schema and generate Prisma client
COPY prisma ./prisma
ENV SKIP_ERD_GENERATION="true"
RUN npx prisma generate

# Copy application source
COPY ./src ./src

# Build the application
RUN npm run build

# Runtime stage
FROM node:${NODE_VERSION}-alpine as runtime
ENV WORKDIR /opt
WORKDIR $WORKDIR

# Install system dependencies
RUN apk update && apk add build-base git curl
RUN npm install -g pm2

# Copy built assets from the build stage
COPY --from=build /opt .

# Install production node modules
RUN npm install --pure-lockfile --production

# Copy remaining necessary files
COPY ./views ./views
COPY processes.config.js .

EXPOSE 8081
ENV PORT 8081
ENV NODE_ENV production

# Start the application
CMD ["pm2-runtime", "start", "processes.config.js", "--env", "production"]
