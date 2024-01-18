# Create image based off of the official Node 10 image
FROM node:21-alpine as builder

# Copy dependency definitions
COPY invite.client/package.json invite.client/package-lock.json ./

## installing and Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i --legacy-peer-deps && mkdir /app && mv ./node_modules ./app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Get all the code needed to run the app
COPY invite.client/. /app/

# Build  bundles
RUN npm run build --prod

FROM nginx:alpine as deploy
COPY invite.client/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /app
COPY --from=builder /app/dist/invite.client/browser/*.* /usr/share/nginx/html/

# Expose the port the app runs in
EXPOSE 4200
