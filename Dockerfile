FROM node v20.18.0

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ..
EXPOSE 4000
CMD["npm","run","start"]