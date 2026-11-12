# Use a lightweight official Node.js runtime image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy your application file into the container
COPY app.js .

# Document the port the app uses
EXPOSE 3000

# Run the application when the container starts
CMD ["node", "app.js"]

