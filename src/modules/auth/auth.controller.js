const loginUser = async (req, res) => {
  try {
    const response = await authService.loginUser(req.body);

    if (response.error) {
      return res
        .status(response.statusCode)
        .json({ message: response.message, data: null });
    }

    return res.status(200).json({
      message: response.message,
      data: response,
    });
  } catch (error) {
    console.error("Error during user login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const authService = {
  loginUser,
};
