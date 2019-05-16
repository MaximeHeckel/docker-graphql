FROM node:10.15.2-alpine

RUN apk update && apk upgrade && mkdir -p /usr/app
WORKDIR /usr/app

COPY ./ /usr/app/

RUN yarn --frozen-lockfile && \
    yarn --link-duplicates && \
    yarn cache clean

EXPOSE 4000
CMD yarn start





