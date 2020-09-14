FROM node:alpine

WORKDIR /docker-app

COPY package.json /docker-app

RUN yarn install

COPY . /docker-app

CMD ["yarn", "run", "start"]