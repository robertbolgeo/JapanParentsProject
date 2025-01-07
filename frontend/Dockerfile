# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /frontend

# Copy package.json and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the application
COPY frontend/ .

# Build the app
RUN npm run build

# Stage 2: Serve the React app
FROM nginx:1.23-alpine

# Copy build files to nginx html directory
COPY --from=build /frontend/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
