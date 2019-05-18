FROM node

WORKDIR /opt

RUN git clone https://github.com/etsy/statsd.git statsd

WORKDIR /opt/statsd
COPY ./config.js /opt/statsd/config.js

RUN npm install statsd-librato-backend

EXPOSE 8125:8125/udp
CMD ["node", "./stats.js", "./config.js"]
