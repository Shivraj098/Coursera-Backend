const { Router } = require("express");
const userRouter = Router();


userRouter.post("/signup", function (req, res) {
  res.json({
    message: "Sign up endpoint",
  });
});

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "Sign in endpoint",
  });
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "All the courses that user purchased",
  });
});

module.exports = {
    userRouter : userRouter
}