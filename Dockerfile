# What we want to use as the base of our image.
FROM node:14

# Copy our node files to the directory.
COPY ./config/config.js /app/config/
COPY *.js /app/
COPY package.json /app/
COPY package-lock.json /app/

# Set the working directory.
WORKDIR /app

# Install dependencies.
RUN npm ci

# Create configuration directory.
RUN mkdir /app/config/etc

# Start the application.
CMD ["node", "/app/index.js"]