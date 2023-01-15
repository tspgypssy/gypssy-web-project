FROM node:16-alpine as build-deps

ARG ENV
ENV APP_ENV=$ENV


RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    git

RUN adduser -h /home/app -s /bin/sh app -D
COPY --chown=app . /home/app/cfa-ui
USER app
WORKDIR /home/app/cfa-ui

# RUN mv npmrc-home /home/app/.npmrc
RUN yarn install

FROM build-deps as image-stage
RUN yarn run build:staging
# RUN rm /home/app/.npmrc

EXPOSE 3000
CMD ["yarn", "start:staging"]

FROM build-deps as image-prod
RUN yarn run build:production
# RUN rm /home/app/.npmrc

EXPOSE 3000
CMD ["yarn", "start:production"]
