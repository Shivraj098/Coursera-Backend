const { Router } = require("express");
const courseRouter = Router()

courseRouter.post("/purchase",function(req,res){
    res.json({
        message: "To purchase a course"
    })
})

courseRouter.get("/preview",function(req,res){
    res.json({
        message: "All the courses that are available with preview"
    })
})
module.exports = courseRouter