FROM ubuntu 
RUN apt-get update 
RUN apt-get install apache2 -y
RUN apt-get install –y apache2-utils 
RUN apt clean 
EXPOSE 80
CMD [“apache2ctl”, “-D”, “FOREGROUND”]
