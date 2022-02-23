FROM node:16

# Install dockerize
RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /app

# Optimize caching 
COPY package* ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "dockerize", "-wait", "tcp://fc-pg:5432"]

CMD [ "npm", "run", "dev" ]
