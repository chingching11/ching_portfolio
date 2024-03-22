# Use official Node.js LTS (Long Term Support) image as base
FROM node:latest

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that your Next.js app runs on (default is 3000)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
