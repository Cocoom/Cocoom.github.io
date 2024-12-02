FROM node:20-alpine
LABEL author="The Amazing Cocoom Engineering Team <infra@cocoom.com>"

# Add packages needed to build native dependencies
RUN apk add --no-cache git

RUN mkdir /usr/local/cocoom
WORKDIR /usr/local/cocoom

ENV NODE_PATH=./src \
    NODE_ENV=development
