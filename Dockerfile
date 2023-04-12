# Stage 1
# Start from lightweight node
FROM node:lts-alpine as node
LABEL author="Tomislav"
WORKDIR /app

# Copy package.json and package-lock.json files and install all required packages
COPY package*.json ./
RUN npm install

# Copy everything to the workdir
COPY . .

# Install Angular CLI and build the app for prod
RUN npm install -g @angular/cli
RUN ng build

# Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx

# Copy project files to html folder
COPY --from=node /app/dist/weather /usr/share/nginx/html

# Copy nginx configuration file from the project to nginx conf.d directory
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
