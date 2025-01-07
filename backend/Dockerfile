FROM node:18-alpine

WORKDIR /backend

# Copy package.json and install dependencies
COPY backend/package*.json ./
RUN npm install

# Copy the rest of the application
COPY backend/ .

# Expose the backend port (e.g., 3000)
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "run", "dev"]
