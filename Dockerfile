FROM node:10-alpine as build

LABEL maintainer="William Le <william.le@passcareer.io>"

RUN set -xe \
 && apk add --no-cache bash git openssh
RUN yarn global add bower

# create app directory
RUN mkdir -p /usr/src/passcareer/linkedbooster.app-2
WORKDIR /usr/src/passcareer/linkedbooster.app-2

# install dependencies
COPY package.json yarn.lock ./
RUN yarn

COPY . ./
RUN bower install --allow-root
RUN ./node_modules/.bin/gulp production:vendors:compile
RUN yarn build

FROM nginx:1.12-alpine
COPY --from=build /usr/src/passcareer/linkedbooster.app-2/build /usr/share/nginx/html
COPY config/nginx /etc/nginx
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
