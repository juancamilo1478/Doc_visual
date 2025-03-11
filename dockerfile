FROM node:21-alpine3.19
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 5173
 