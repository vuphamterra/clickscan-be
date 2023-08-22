FROM node:18.16.0

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

COPY tsconfig.json tsconfig.json

RUN yarn install

RUN yarn build

EXPOSE 3001
CMD [ "yarn", "start" ]