const { Router } = require("express");
const { userRouter } = require("../modules/user/user.router");

const router = Router();

const moduleRouter = [
  {
    path: "/user",
    route: userRouter,
  },
];

moduleRouter.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
