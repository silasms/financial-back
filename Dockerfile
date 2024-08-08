FROM node:20.10-alpine
WORKDIR /app
COPY . .
RUN yarn install
CMD ["yarn", "start"]
EXPOSE 3000