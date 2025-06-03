const User = require("../user/user.model");

const loginUser = async (payload) => {
  const isExist = await User.findOne({
    email: payload.email,
  });

  if (!isExist) {
    return {
      error: true,
      statusCode: 404,
      message: "User not found",
    };
  }

  const isMatch = await isExist.comparePassword(payload.password);
  if (!isMatch) {
    return {
      error: true,
      statusCode: 401,
      message: "Invalid email or password",
    };
  }

  return isExist;
};

const authService = {
  loginUser,
};

module.exports = authService;
