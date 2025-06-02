const userService = require("./user.service");

const createUser = async (req, res) => {
  try {
    const response = await userService.createUserInDB(req.body);

    if (response) {
      res
        .status(201)
        .json({ message: "User created successfully", data: response });
    } else {
      res.status(400).json({ message: "User creation failed" });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await userService.getAllUsersFromDB();
    
    if (response && response.length > 0) {
      res
        .status(200)
        .json({ message: "Users fetched successfully", data: response });
    } else {
      res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const useController = {
  createUser,
  getAllUsers,
};

module.exports = useController;
