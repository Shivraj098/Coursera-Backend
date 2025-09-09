const  mongoose  = require("mongoose")
console.log("Connected to database");
mongoose.connect("mongodb+srv://Raj_123:1vfWwyfRDwqwUX1e@singh.8azndiu.mongodb.net/Coursera-Backend");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email : {type : String , required : true , unique : true},
    password : String,
    firstName : String,
    lastName : String

});

const adminSchema = new Schema({
    email : {type : String , required : true , unique : true},
    password : String,
    firstName : String,
    lastName : String

});

const courseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageURL : String,
    creatorId : ObjectId,

});

const purchaseSchema = new Schema({
   userId : ObjectId,
   courseId : ObjectId
});

const userModel = mongoose.model("users",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel   
}