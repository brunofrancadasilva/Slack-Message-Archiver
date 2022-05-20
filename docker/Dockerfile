FROM node:18.1.0

EXPOSE 3000
EXPOSE 5858

RUN npm install -g nodemon

COPY . /data

WORKDIR /data

RUN npm install

CMD npm run debug:watch