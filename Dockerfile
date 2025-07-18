FROM nginx:alpine

LABEL org.opencontainers.image.description="这是一个用于构建 AbacusFlow Website 的镜像"

# 复制 index.html 和 public/ 到根目录下
COPY index.html /usr/share/nginx/html/
COPY public/ /usr/share/nginx/html/

# 拷贝模板配置
COPY docker/nginx-templates/default.conf.template /etc/nginx/templates/default.conf.template

