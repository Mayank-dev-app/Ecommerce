const Account = require("../database/UserAccount");
const bcrypt  = require("bcrypt");
const EmailSender = require("../../Middleware/Email/EmailSender");

 const AccountController = async (req, res) => {
  try {
    const { name, email, phone, address, password } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const existUser = await Account.findOne({ email });
    if (existUser) {
      return res.status(401).send({
        success: false,
        message: "You Email Already Register Please Login",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const hashOtp = await bcrypt.hash(otp, 8);
    const newUser = new Account({
      name,
      email,
      phone,
      address,
      password: hashpassword,
      otp: hashOtp,
      expireTime: Date.now() + 5*60*1000,  //2 minute Expire Time
    });
    await newUser.save();
    const mailResult = await EmailSender(email, otp);

    if (!mailResult.success) {
      return res.status(500).json({
        success: false,
        message: "User saved but OTP email failed",
        error: mailResult.error,
      });
    }

    res.status(201).send({
      success: true,
      message: "Data Successylly Save in Database and OTP send at your Email",
    });
  } catch (err) {
    console.log("Error From Account Controller: ", err);
    res.status(500).json({ " error": err });
  }
};

module.exports = { AccountController };
