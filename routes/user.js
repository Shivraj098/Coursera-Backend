const { Router } = require("express");
const userRouter = Router();


userRouter.post("/users/signup", function (req, res) {
  res.json({
    message: "Sign up endpoint",
  });
});

userRouter.post("/users/signin", function (req, res) {
  res.json({
    message: "Sign in endpoint",
  });
});

userRouter.get("/users/purchases", function (req, res) {
  res.json({
    message: "All the courses that user purchased",
  });
});

module.exports = {
    userRouter : userRouter
}