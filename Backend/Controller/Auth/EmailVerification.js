const EmailSender = require("../../Middleware/Email/EmailSender");
const { generateToken } = require("../../Middleware/token/Authentication");
const Account = require("../database/UserAccount");
const bcrypt = require("bcrypt");

const OtpVerification = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const existUser = await Account.findOne({ email });
    if (!existUser) {
      return res.status(401).send({
        success: false,
        message: "Your Email is not found",
      });
    }

    if (!existUser.expireTime || Date.now() > existUser.expireTime) {
      return res
        .status(400)
        .send({ success: false, message: "OTP Expired , Request A New One" });
    }

    const isMatch = await bcrypt.compare(otp, existUser.otp);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "Invalid OTP ",
      });
    }
    existUser.otp = null;
    existUser.expireTime = null;
    existUser.verify = true;

    const payload = {
      id: existUser.id,
      name: existUser.name,
    };

   const token = generateToken(payload);

    await existUser.save();
    return res.status(200).send({
      success: true,
      message: "OTP Verified successFully",
      user: existUser.name,
      token,
    });
  } catch (err) {
    console.log("Error in OtpVerification is: ", err);
    return res.status(500).send({
      success: false,
      message: "Error in OtpVerification",
    });
  }
};

/////////////////////////////////////////////////////////////
const OtpResend = async (req, res) => {
  try {
    const { email } = req.body;
    const exitUser = await Account.findOne({ email });
    if (!exitUser) {
      return res.status(400).send({
        success: false,
        message: "Pleses Give Email",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const mailResult = await EmailSender(email, otp);
    if (!mailResult.success) {
      return res.status(500).send({
        success: false,
        message: "Mail have an  error",
        error: mailResult.error,
      });
    }

    const hashOTP = await bcrypt.hash(otp, 10);
    exitUser.otp = hashOTP;
    exitUser.expireTime = Date.now() + 5 * 60 * 1000;

    exitUser.save();
    return res.status(200).send({
      success: true,
      message: "OTP Send Successfully",
    });
  } catch (err) {
    console.log("Resend OTP Error is ", err);
    return res
      .status(500)
      .send({ success: false, message: "Error in Resend Otp" });
  }
};

module.exports = { OtpVerification, OtpResend };
