# Desafio FullCycle - Docker

# Go

Para rodar o desafio de GO, execute:

Localmente:

```bash
$ docker build -t otaviotech/fc-go go -f go/Dockerfile
$ docker run otaviotech/fc-go
```

A partir da imagem do dockerhub:

```bash
$ docker rmi -f otaviotech/fc-go
$ docker run otaviotech/fc-go
```

# Node / NGINX

Para rodar o desafio de NodeJS / NGINX, execute:

```bash
$ cd node
$ docker-compose up -d --build
$ curl http://localhost:8080
```
