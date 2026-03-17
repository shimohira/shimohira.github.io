FROM nginx:1.16.1-alpine
ENV pipeline_dir PIPELINE_DIR
COPY . /var/www/html
COPY script/nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /var/www/html/script
ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime
RUN echo $TZ > /etc/timezone
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]