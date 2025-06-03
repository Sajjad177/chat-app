const { Router } = require("express");
const authService = require("./auth.service");

const router = Router();

router.post("/login", authService.loginUser);

exports.authRouter = router;
