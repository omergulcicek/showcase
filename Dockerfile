# Linux (Debian) ortamında Vercel’e yakın bir `pnpm build` doğrulaması.
# Kullanım: pnpm run docker:build
# Not: .git bu imajda kopyalanır; Nextra git timestamp için gerekir.

FROM node:22-bookworm-slim

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends git ca-certificates \
  && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@10.19.0 --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

ENV NODE_ENV=production
ENV CI=true

RUN pnpm build
