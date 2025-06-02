require("dotenv").config();

const config = {
  port: process.env.PORT,
  mongodbUrl: process.env.MONGODB_URL,
  NODE_ENV: process.env.NODE_ENV,
};

module.exports = config;
