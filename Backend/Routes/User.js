const express = require("express");
const { AccountController } = require("../Controller/Auth/AccountController");
const { OtpVerification , OtpResend} = require("../Controller/Auth/EmailVerification");
const { loginUser, logOut } = require("../Controller/Auth/Login");
const Route = express.Router();

Route.post("/create-Account", AccountController);
Route.post("/login", loginUser);
Route.post("/logout", logOut);

Route.post("/otp-verify", OtpVerification);
Route.post("/otp-resend", OtpResend);

module.exports = Route;