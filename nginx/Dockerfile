# Nginx resmi imajını kullan
FROM nginx:latest

COPY ./react/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

# Nginx'e gelen bağlantılar için portları aç
EXPOSE 80
EXPOSE 81
