FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package.json ./

FROM base as production
WORKDIR /app
COPY package-lock.json ./
RUN npm ci


COPY . .
RUN npm run build
CMD npm run start

FROM base as development
WORKDIR /app
RUN npm install 
COPY . .
CMD npm run dev