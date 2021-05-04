FROM node:15-alpine

WORKDIR /home/node/app

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# RUN mkdir -p /home/node/app/node_modules

# COPY package*.json ./

# RUN npm install

# COPY . .

EXPOSE 8080

# CMD [ "node", "index.js" ]
