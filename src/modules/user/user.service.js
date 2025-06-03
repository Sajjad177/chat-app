const User = require("./user.model");

const createUserInDB = async (payload) => {
  const existingUser = await User.findOne({ email: payload.email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

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
