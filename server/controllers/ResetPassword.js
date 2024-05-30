import User from "../models/User.js";
import mailSender from "../utils/mailSender.js";
import crypto from "crypto";
import bcrypt from "bcrypt";

//reset password link
export const resetPasswordToken = async (req, res) => {
  try {
    //get email from req body
    const email = req.body.email;

    //check user for this email , email validation
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(403).json({
        success: false,
        message: `Your Email : ${email} is not registered with us`,
      });
    }

    //generate token
    const token = crypto.randomBytes(20).toString("hex");

    //update user by adding token and expiration time
    const updateDetails = await User.findOneAndUpdate(
      { email: email },
      { token: token, resetPasswordExpires: Date.now() + 5 * 60 * 1000 },
      { new: true }
    );
    console.log("DETAILS", updateDetails);

    //create url
    const url = `http://localhost:3000/update-password/${token}`;
    //send mail containing the url
    await mailSender(
      email,
      "Password Reset Link",
      `Your Link for email verification is ${url}. Please click this url to reset your password`
    );
    //return response
    return res.status(200).json({
      success: true,
      message:
        "Email sent Succesfully , please check email and change password",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sent sending reset password mail",
    });
  }
};

//reset Password
export const resetPassword = async (req, res) => {
  try {
    //data fetch
    const { password, confirmPassword, token } = req.body;
    console.log(password+" "+confirmPassword+" "+token);
    //validation
    if (password !== confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "password is not matching",
      });
    }
    //get userdetail from db using token
    const userDetails = await User.findOne({ token: token });

    //if no entry - invalid token
    if (!userDetails) {
      return res.status(403).json({
        success: false,
        message: "token is invalid",
      });
    }

    //token time checking
    if (userDetails.resetPasswordExpires < Date.now()) {
      return res.json({
        success: false,
        message: "Token is expired, please regenrate your token",
      });
    }
    //hash pwd
    const hashedPassword = await bcrypt.hash(password, 10);

    //password update
    await User.findOneAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );

    //return response
    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset pwd mail",
    });
  }
};
