FROM node:18-slim

WORKDIR /app

COPY . /app

RUN npm install

RUN npm install -g @angular/cli

# RUN npm run build:ssr

# CMD [ "node", "start:ssr" ]