const mongoose = require("mongoose");

const AccountScheema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email:{
        type:String,   
        require: true,
    },
    phone: {
        type: String,
        require:true,
    },
    address: {
        type:String,
        require: true,
    },
    password:{
        type:String,
        require: true,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    otp:{
        type:String,
        default:NaN,
    },
    expireTime:{
       type: Date,
    //    index: {expires: 0 } means complete record will be delete but i dont want
    },
}, {timestamps: true});

const user = mongoose.model("UserAccount" , AccountScheema);

module.exports = user;