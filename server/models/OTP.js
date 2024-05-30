import mongoose from "mongoose";
import mailSender from "../utils/mailSender.js";
import { emailTemplate } from "../mail/templates/emailVerificationTemplate.js";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});

async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email from StudyNotion",
      emailTemplate(otp),
    );
    console.log("Email sent succesfully", mailResponse.response);
  } catch (error) {
    console.log("error accured while sending mail: ", error);
    throw error;
  }
}

otpSchema.pre("save", async function (next) {
  // console.log("New document saved to database");
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

export default mongoose.model("OTP", otpSchema);
