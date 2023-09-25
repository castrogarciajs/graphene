FROM node:18-alpine AS base


FROM base AS builder

RUN apk add --no-cache libc6-compat
RUN apk update


WORKDIR /app


RUN npm install -g turbo
COPY . .

RUN turbo prune --scope=graphql --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package.json ./package.json
RUN npm install

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN npx turbo run build --filter=graphql

FROM base AS runner
WORKDIR /app

CMD node packages/graphql/dist/index.js
