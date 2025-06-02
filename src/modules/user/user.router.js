const { Router } = require("express");
const useController = require("./user.contoller");

const router = Router();

router.post("/register", useController.createUser);
router.get("/", useController.getAllUsers);

exports.userRouter = router;
