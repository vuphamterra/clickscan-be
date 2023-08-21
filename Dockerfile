FROM node:18.16.0

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

RUN yarn build

EXPOSE 3001
CMD [ "node", "dist/main.js" ]