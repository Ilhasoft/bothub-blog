FROM node:lts-alpine

EXPOSE 3000

WORKDIR /app

COPY . .

RUN yarn install

ENTRYPOINT yarn start --host 0.0.0.0 --port 3000