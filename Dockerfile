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
FROM node:${NODE_VERSION}-alpine as builder
WORKDIR /app

# Copy package.json and lock file
COPY package.json package-lock.json tsconfig.json tsconfig.compile.json .barrelsby.json ./

# Install dependencies
# RUN npm install --pure-lockfile

# Copy Prisma schema and generate Prisma client
COPY ./prisma ./prisma
ENV SKIP_ERD_GENERATION="true"
RUN npx prisma generate --generator client tsed

# Copy application source
COPY ./src ./src

# Build the application
RUN npm run build

# Runtime stage
FROM node:${NODE_VERSION}-alpine as runtime
ENV WORKDIR /app
WORKDIR $WORKDIR

# Install system dependencies
# RUN apk update && apk add build-base git curl
# RUN npm install -g pm2

# Copy built assets from the build stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY ./views ./views


# Install production node modules
RUN npm install --pure-lockfile --production



EXPOSE 8083
ENV PORT 8083
ENV NODE_ENV production

# Start the application
CMD [  "npm", "run", "start:migrate:prod" ]
