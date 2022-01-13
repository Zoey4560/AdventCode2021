FROM node:latest

WORKDIR /usr/app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install

COPY data ./data/
COPY src ./src/

COPY tsconfig.json ./
RUN npm run build

ENTRYPOINT ["npm", "start"]
