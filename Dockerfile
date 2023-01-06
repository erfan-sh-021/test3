# # Step 1
FROM node:17-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
 
# # Stage 2
FROM nginx:1.19.0
COPY --from=build-step /app/build /usr/share/nginx/html

#COPY --from=build /app/build /usr/share/nginx.html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
