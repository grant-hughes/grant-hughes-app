FROM ubuntu:latest

RUN apt-get update && apt-get install -y git npm supervisor curl

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN git clone https://github.com/grant-hughes/nodejs-quickstart.git
WORKDIR "nodejs-quickstart"
RUN npm install
EXPOSE 4000
WORKDIR "/"

COPY src /src
WORKDIR "/src"
RUN npm install
EXPOSE 80

CMD ["/usr/bin/supervisord"]
