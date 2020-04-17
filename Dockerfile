FROM nginx:alpine

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY .vuepress/dist /usr/share/nginx/html
