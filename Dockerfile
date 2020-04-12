FROM nginx:alpine

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docs/.vuepress/dist/ /usr/share/nginx/html
