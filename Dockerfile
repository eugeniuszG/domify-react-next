FROM node

# set the working dir for container
WORKDIR /app

COPY domify-react-next/ .

RUN npm install
