const { Router } = require("express");
const { userRouter } = require("../modules/user/user.router");
const { authRouter } = require("../modules/auth/auth.router");

const router = Router();

const moduleRouter = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
];

moduleRouter.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
