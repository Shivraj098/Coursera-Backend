const { Router } = require("express");
const courseRouter = Router()

courseRouter.post("/course/purchase",function(req,res){
    res.json({
        message: "To purchase a course"
    })
})

courseRouter.get("/course/preview",function(req,res){
    res.json({
        message: "All the courses that are available with preview"
    })
})
module.exports = {
    courseRouter : courseRouter
}