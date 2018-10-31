# env-test
Test of setting runtime app environment in different deployments

## Run the app locally, without setting the environment

> This option requires node running locally

  ```bash
  node server.js
  # or
  npm start
  ```

## Run the app locally, passing command line environment settings

> This option requires node running locally

  ```bash
  set PORT=4200 && node server.js
  # or
  npm run start:set
  ```

## Run the app locally, pre-loading environment settings from a `.env` file

> This option requires node running locally

1. Make a copy of `.example.env` file and name it `.env`. Replace the values with your specific configuration. Note that this file is already listed in `.gitignore` so it won't get pushed to github. Do not to include extra spaces or quotes. These values are taken verbatum.

  ```javascript
  NODE_ENV=development
  PORT=8626
  ```

2. start the app

  ```bash
  node -r dotenv/config server.js
  # or
  npm run start:dotenv
  ```

## Run the app locally, inside of Docker container

> This option requires ...

## Run the app on Azure

> This option requires ...

## Run the app inside of Docker container hosted in Azure

> This option requires ...

## Reference material

- https://github.com/johnpapa/vikings
- https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786