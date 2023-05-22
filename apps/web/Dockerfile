FROM nginx:stable-alpine3.17

RUN apk update

WORKDIR /app


COPY ./build/ ./
COPY ./nginx.conf /etc/nginx/nginx.conf
