ARG IMAGE_VER=20-slim

FROM ghcr.io/probwebdev/docker-build-base:$IMAGE_VER

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

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

COPY --chown=node:node . ./

RUN pnpm build

EXPOSE 3000

CMD pnpm start
