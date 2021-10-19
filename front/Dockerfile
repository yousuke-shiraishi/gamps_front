FROM node:12.18.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# COPY ./front_end/package.json /usr/src/app
COPY ["./front_end/package.json", "./front_end/yarn.lock", "./"]
# Bundle app source
# RUN yarn
COPY ./front_end /usr/src/app
# RUN yarn add react-scripts
RUN yarn install
CMD yarn start

EXPOSE 3333
