FROM node:18-alpine AS base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./

ARG NODE_ENV
ENV NODE_ENV "$NODE_ENV"

FROM base AS production
ARG BACKEND_PROTOCOL
ARG BACKEND_HOST
ARG BACKEND_PORT
ENV BACKEND_PROTOCOL "$BACKEND_PROTOCOL"
ENV BACKEND_HOST "$BACKEND_HOST"
ENV BACKEND_PORT "$BACKEND_PORT"

WORKDIR /app
RUN npm ci
COPY . .
RUN npm run build
CMD npm run start

FROM base AS development
WORKDIR /app
RUN npm install 
COPY . .
CMD npm run dev