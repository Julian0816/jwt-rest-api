FROM node:12.18-stretch-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .
ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]