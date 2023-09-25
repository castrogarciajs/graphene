FROM node:latest


RUN mkdir -p /usr/src/ui
WORKDIR /usr/src/ui/dist

COPY package.json /usr/src/ui/

RUN npm install
RUN npm install -g turbo
RUN npm run build

CMD [ "npm", "run", "dev" ]