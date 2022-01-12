FROM node:latest
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY data ./data/
COPY src ./src/
COPY tsconfig.json ./
RUN ./node_modules/.bin/tsc
ENTRYPOINT ["node", "./build/app.js"]
