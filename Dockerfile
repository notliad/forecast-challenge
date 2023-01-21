FROM node:16-alpine as base

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

FROM nginx:1.16.0-alpine

COPY --from=base --chown=nginx:nginx /app/build /usr/share/nginx/html