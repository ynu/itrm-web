# Set the base image to nginx
FROM node:8.1.2-alpine

# File Author / Maintainer
MAINTAINER Liudonghua <liudonghua123@gmail.com>

# update the repository sources list
# RUN apt-get update

# install vim for quick modify
# RUN apt-get install -y vim

# http://www.clock.co.uk/blog/a-guide-on-how-to-cache-npm-install-with-docker
COPY package.json /app/package.json
COPY . /app

WORKDIR /app

# copy static resources to the specified location

RUN npm install
RUN npm run build
RUN npm -g i serve

# main application command

CMD serve -s /app/build
