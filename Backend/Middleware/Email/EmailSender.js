const  transporter  = require("./EmailConfig")
const otpEmailTemplate = require("./OtpEmail");

const EmailSender = async (email, otp) => {
   try{
    const response = await transporter.sendMail({
        from: "Mayank Sharma <msharma7055084627@gmail.com>",
        to: email,
        subject: 'Email Verification',
        text: `Your OTP is ${otp}. It expires in  10 minutes.`,
        html : otpEmailTemplate(otp),
    }) 

    console.log("Email Send Succeffuly");
    return {success: true}

   }catch(err) {
    console.log("The Error is: ", err);
    return {
        success: false,
        message:'Error in Email Sender',
     }
   }
}

module.exports = EmailSender;