const userRouter = require("express").Router();

userRouter.get("/info", (req, res) => {
  res.json({ code: 0 });
});

module.exports = userRouter;
