FROM golang:1.15 as builder

WORKDIR /go/src/fc

COPY . .

RUN GOOS=linux go build -ldflags="-s -w"

RUN ls -la

FROM scratch 

WORKDIR /go/src/fc
COPY --from=builder /go/src/fc/fc .

CMD ["./fc"]