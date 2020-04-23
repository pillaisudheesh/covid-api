FROM node:10.9-alpine

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY . /app

EXPOSE 5000

CMD ["npm","start"]