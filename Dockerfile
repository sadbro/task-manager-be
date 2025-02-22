FROM node:20

WORKDIR /app

COPY . .
COPY init.sql /docker-entrypoint-initdb.d/10-init.sql

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "dev"]
