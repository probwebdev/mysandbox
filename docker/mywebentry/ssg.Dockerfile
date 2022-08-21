ARG IMAGE_VER=16-slim@sha256:c7a907053a69f6cfbe4c50302e001c1fcc44e69e8462043fecd21f7852560107

FROM ghcr.io/probwebdev/docker-build-base:$IMAGE_VER AS build

WORKDIR /tmp

COPY --chown=node:node package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY --chown=node:node apps/tailwindcss/package.json  ./apps/tailwindcss/package.json
COPY --chown=node:node apps/vanilla-extract/package.json  ./apps/vanilla-extract/package.json
COPY --chown=node:node packages/eslint-config/package.json  ./packages/eslint-config/package.json
COPY --chown=node:node packages/prettier-config/package.json  ./packages/prettier-config/package.json
COPY --chown=node:node packages/lint-staged-config/package.json  ./packages/lint-staged-config/package.json

ENV HUSKY=0

RUN pnpm config set store-dir .pnpm-store && \
    pnpm install && \
    rm -rf .pnpm-store

COPY . ./

RUN pnpm export

# Production build
FROM nginx:stable-alpine

ARG PACKAGE="tailwindcss"

RUN rm -rf /usr/share/nginx/html/*
COPY docker/nginx /etc/nginx
COPY --chown=nginx:nginx --from=build /tmp/apps/$PACKAGE/out /usr/share/nginx/html

EXPOSE 80
