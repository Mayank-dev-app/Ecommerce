const EmailSender = require("../../Middleware/Email/EmailSender");
const { generateToken } = require("../../Middleware/token/Authentication");
const user = require("../database/UserAccount");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exitUser = await user.findOne({ email });
    if (!exitUser) {
      return res.status(401).send({
        success: false,
        message: "Your Account is not Found Pls Create your Account First",
      });
    }

    const match = await bcrypt.compare( password, exitUser.password);
    if (!match) {
      return res.status(400).send({
        success: false,
        message: "Your Password is Inccorrect",
      });
    }

    if (exitUser.verify) {
    const payload = {
      id: exitUser.id,
      name: exitUser.name,
    };
     const token =  generateToken(payload);
      return res.status(200).send({
        success: true,
        message: "Login Successfully",
        token,
        verify: exitUser.verify,
        user: exitUser.name,
      });
    }

    const OTP = Math.floor(100000 + Math.random() * 900000).toString();
    const hasOTP = await bcrypt.hash(OTP, 8);

    const mailResult = await EmailSender(email, OTP);
    if (!mailResult.success) {
      return res.status(500).send({
        success: false,
        message: "Email have an Error from Login user",
      });
    }

    exitUser.otp = hasOTP;
    exitUser.expireTime = new Date(Date.now() + 5 * 60 * 1000);
    await exitUser.save();

    return res.status(200).send({
      success: false,
      otpSent: true,
      message: "OTP sent successfully, please verify your email",
    });
  } catch (err) {
    console.log("Error in Login is: ", err);
    return res
      .status(500)
      .send({ success: false, message: "Error in Login Api" });
  }
};

const logOut = (req,res) => {
  try {
    return res.send({
      message: 'now Logout function is not working',
    })
  } catch (error) {
    console.log("Error in Logout Function: ", error);
    return res.status(500).send({
      success: false,
      message: 'Error in LogOut function',
    })
  }
}

module.exports = { loginUser, logOut };