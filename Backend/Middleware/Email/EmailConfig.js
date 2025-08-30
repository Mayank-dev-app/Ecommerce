const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: process.env.Email,
        pass: process.env.App_Pass,
    }
});

module.exports  = transporter;