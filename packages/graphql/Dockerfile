FROM node:latest

RUN mkdir -p /usr/src/graphql
WORKDIR /usr/src/graphql/dist

# Install app dependencies from package.json. If modules are not included in the package.json file enter a RUN command. E.g. RUN npm install <module-name>

COPY package.json /usr/src/graphql/

RUN npm install
RUN npm install typescript -g
RUN tsc


COPY . /usr/src/graphql/

CMD [ "node", "./dist/index.js" ]

