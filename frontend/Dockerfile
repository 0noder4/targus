FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package.json ./

FROM base as production
WORKDIR /app
ENV NODE_ENV=production

RUN npm i

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY . .
RUN chown nextjs:nodejs .
USER nextjs
RUN npm run build

CMD npm start

FROM base as dev
WORKDIR /app
ENV NODE_ENV=development
RUN npm install 
COPY . .
CMD npm run dev