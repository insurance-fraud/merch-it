# You should always specify a full version here to ensure all of your
# developers are running the same version of Node.
FROM node:8.8.1

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Install `serve` to run the application.
RUN npm install -g serve

# Set the command to start the node server.
CMD serve -p $PORT -s build

# Tell Docker about the port we'll run on.
EXPOSE 5000

# Copying package.json and npm-shrinkwrap.json so it hits the Docker cache if
# nothing has been changed in those files.
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install

# Copy all local files into the image.
COPY . .

# Build for production.
RUN npm run build --production
