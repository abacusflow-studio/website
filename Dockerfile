FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

LABEL org.opencontainers.image.description="这是一个用于构建 AbacusFlow Website 的镜像"

ENV REDIRECT_TO_HTTPS=true

# 复制 Next.js 静态导出产物
COPY --from=builder /app/out/ /usr/share/nginx/html/

# 复制可复用的配置片段
COPY docker/nginx-snippets/common_spa.conf /etc/nginx/snippets/common_spa.conf

# 复制主 Nginx 模板
COPY docker/nginx-templates/default.conf.template /etc/nginx/templates/default.conf.template
