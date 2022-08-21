FROM nginx:stable-alpine

ARG PACKAGE="tailwindcss"

RUN rm -rf /usr/share/nginx/html/*
COPY docker/nginx /etc/nginx
COPY --chown=nginx:nginx apps/$PACKAGE/out /usr/share/nginx/html

EXPOSE 80
