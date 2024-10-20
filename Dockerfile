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
FROM oven/bun:1 
WORKDIR /app

# Copy package.json and related files
COPY package.json bun.lockb tsconfig.json tsconfig.compile.json .barrelsby.json ./

# Install production dependencies
RUN bun install

# Copy application source
COPY ./src ./src
COPY ./views ./views



EXPOSE 8083
ENV PORT=8083
ENV NODE_ENV=production

# Start the application
CMD ["bun", "/app/src/index.ts"]
