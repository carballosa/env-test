module.exports = {

  port: process.env.PORT,
  env: process.env.NODE_ENV

  // mongoApiAccount: process.env.MONGO_API_ACCOUNT,
  // mongoApiPort: process.env.MONGO_API_PORT,
  // mongoDb: process.env.MONGO_API_DB,
  // mongoApiKey: process.env.MONGO_API_KEY,

  // localMongo: process.env.LOCAL_MONGO || 'localhost',
};

//Below approach requires to take in a runtime dependency on 'dotenv' package

// const dotenv = require('dotenv');
// const result = dotenv.config();
// if (result.error) {
//   throw result.error;
// }
// const { parsed: envs } = result;
// console.log(envs);
// module.exports = envs;