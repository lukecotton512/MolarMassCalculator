# What we want to use as the base of our image.
FROM node:12

# Copy our node files to the directory.
COPY ./config/* /app/config/
COPY *.js /app/
COPY package.json /app/
COPY package-lock.json /app/

# Set the working directory.
WORKDIR /app

# Install the package.
RUN npm install

# Create configuration directory.
RUN mkdir /app/config/etc

# Start the application.
CMD ["node", "/app/index.js"]