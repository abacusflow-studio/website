FROM nginx:alpine

LABEL org.opencontainers.image.description="这是一个用于构建 AbacusFlow Website 的镜像"

ENV REDIRECT_TO_HTTPS=true

# 复制 index.html 和 public/ 到根目录下
COPY index.html /usr/share/nginx/html/
COPY public/ /usr/share/nginx/html/


# 复制可复用的配置片段
COPY docker/nginx-snippets/common_spa.conf /etc/nginx/snippets/common_spa.conf

# 复制主 Nginx 模板
COPY docker/nginx-templates/default.conf.template /etc/nginx/templates/default.conf.template

