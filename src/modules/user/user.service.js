const User = require("./user.model");

const createUserInDB = async (payload) => {
  const result = await User.create(payload);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find({});
  return result;
};

const userService = {
  createUserInDB,
  getAllUsersFromDB,
};

module.exports = userService;
