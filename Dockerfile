# What we want to use as the base of our image.
FROM node:20

# Create a user for the molar mass calculator to use
RUN useradd -ms /bin/bash mmcserver

# Use that user
USER mmcserver

# Copy our node files to the directory.
COPY --chown=mmcserver:mmcserver ./dist/* /app/
COPY --chown=mmcserver:mmcserver package.json /app/
COPY --chown=mmcserver:mmcserver package-lock.json /app/

# Set the working directory.
WORKDIR /app

# Install dependencies.
RUN npm ci

# Create configuration directory.
RUN mkdir -p /app/config/etc

# Expose proper ports.
EXPOSE 3000

# Start the application.
CMD ["node", "/app/index.js"]