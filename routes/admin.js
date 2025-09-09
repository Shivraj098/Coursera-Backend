const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");


adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "Sign up endpoint",
  });
});

adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "Sign in endpoint",
  });
});

adminRouter.put("/course",function(req , res){
    res.json({
        message : "Create a course"
    })
})
adminRouter.get("/couors/bulk" , function(req,res){
    res.json({
        message : "Get all the courses"
    })
})

module.exports =  adminRouter;