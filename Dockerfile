FROM node:alpine
LABEL maintainer="Florian Wartner <florian@wartner.io>"

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
