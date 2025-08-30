const jwt = require("jsonwebtoken");
require("dotenv").config();

const Secret_KEY = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res.status(400).send({
        success: false,
        message: " token not Found",
      });
    } else {
      //verify the token
      const decode = jwt.verify(token, Secret_KEY);

      req.user = { id: decode.id };
      next();
    }
  } catch (error) {
    console.log("Error in authMiddleware", error);
    return res.status(500).send({
      success: false,
      message: "Error in authMiddleware",
    });
  }
};

if (!Secret_KEY) {
  console.log("Secret Key is not set");
}

const generateToken = (userData) => {
  //generate a new jet token
  return jwt.sign(userData, Secret_KEY);
};

module.exports = { authMiddleware, generateToken };