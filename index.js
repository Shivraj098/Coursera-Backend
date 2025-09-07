const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");

app.post("/users/signup",function(req,res){
    res.json({
        message: "Sign up endpoint"
    })
})

app.post("/users/signin",function(req,res){
    res.json({
        message: "Sign in endpoint"
    })
})

app.get("/users/purchases",function(req,res){
    res.json({
        message: "All the courses that user purchased"
    })
})

app.post("/course/purchase",function(req,res){
    res.json({
        message: "To purchase a course"
    })
})

app.get("/courses",function(req,res){
    res.json({
        message: "All the courses that are available"
    })
})

app.listen(3000);