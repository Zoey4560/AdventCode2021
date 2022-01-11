FROM node:latest
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN ./node_modules/.bin/tsc
ENTRYPOINT ["node", "./build/app.js"]
