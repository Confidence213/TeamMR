# Dockerfile for client

# Build react client
FROM node:14.17.1

# Working directory be app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies
RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3005

CMD ["npm","start"]