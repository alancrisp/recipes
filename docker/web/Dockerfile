FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install \
 && apt-get update \
 && apt-get install wait-for-it

CMD ["wait-for-it", "db:3306", "-t", "60", "--", "npm", "start"]
