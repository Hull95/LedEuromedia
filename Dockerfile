FROM node:14.15.4-alpine3.10

WORKDIR /app

COPY ./package.json ./

RUN yarn
    
COPY . .

CMD ["yarn", "dev"]