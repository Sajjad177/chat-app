require("dotenv").config();

const config = {
  port: process.env.PORT,
  mongodbUrl: process.env.MONGODB_URL,
};

module.exports = config;
