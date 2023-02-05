FROM node:current-alpine3.17

WORKDIR /var/www/cleave

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .

CMD [ "npm", "start" ]
