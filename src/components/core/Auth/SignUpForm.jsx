import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"

const SignUpForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  // const { firstName, lastName, email, password, confirmPassword } = formData;
  
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  function changeHandler(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if(formData.password!==formData.confirmPassword){
      toast.error("Passwords Do Not Match")
    }
    const signupData = {
      ...formData,
      accountType,
    }
    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))
      // Reset
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
      setAccountType(ACCOUNT_TYPE.STUDENT)
  }

 

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-2">
      <div className="bg-richblack-800 font-inter w-fit px-1 py-1 flex rounded-full drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] mb-5">
        <button
          onClick={() => setAccountType(ACCOUNT_TYPE.STUDENT)}
          className={`${
            accountType === ACCOUNT_TYPE.STUDENT
              ? "bg-richblack-900 text-white"
              : "bg-transparent"
          } transition-all duration-200 py-[8px] text-base px-6 rounded-full text-richblack-300`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType(ACCOUNT_TYPE.INSTRUCTOR)}
          className={`${
            accountType === ACCOUNT_TYPE.INSTRUCTOR
              ? "bg-richblack-900 text-white"
              : "bg-transparent"
          } transition-all duration-200 py-[8px] text-base px-6 rounded-full text-richblack-300`}
        >
          Instructor
        </button>
      </div>

      <div className="flex flex-col gap-3 font-inter">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <label className="sm:w-[49%] w-full">
            <p className="text-richblack-5">
              First Name<sup className="text-pink-200 ml-1">*</sup>
            </p>
            <input
              className="w-full bg-richblack-700 mt-2 py-3 px-2 outline-none rounded-lg border-b-[2px] text-richblack-5 placeholder-richblack-300 border-richblack-500 "
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
            />
          </label>

          <label className="w-full sm:w-[48%] ">
            <p className="text-richblack-5">
              Last Name<sup className="text-pink-200 ml-1">*</sup>
            </p>
            <input
              className="w-full bg-richblack-700 mt-2 py-3 px-2 outline-none rounded-lg border-b-[2px] text-richblack-5 placeholder-richblack-300 border-richblack-500"
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
            />
          </label>
        </div>
        <label>
          <p className="text-richblack-5 ">
            Email Address<sup className="text-pink-200 ml-1">*</sup>
          </p>
          <input
            className="w-full bg-richblack-700 mt-2 py-3 px-2 outline-none rounded-lg border-b-[2px] text-richblack-5 placeholder-richblack-300 border-richblack-500"
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email Address"
          />
        </label>

        <div className="flex flex-col sm:flex-row gap-2 w-full justify-between">
          <label className="relative w-full sm:w-[49%]">
            <p className="text-richblack-5">
              Create Password<sup className="text-pink-200 ml-1">*</sup>
            </p>
            <input
              className="w-full bg-richblack-700 mt-2 py-3 px-2 outline-none rounded-lg border-b-[2px] text-richblack-5 placeholder-richblack-300 border-richblack-500"
              required
              type={showPass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
            />
            <span
              className="absolute top-[48px] text-xl right-2 cursor-pointer"
              onClick={() => {
                setShowPass((prev) => !prev);
              }}
            >
              {!showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label className="relative w-full sm:w-[48%] ">
            <p className="text-richblack-5">
              Confirm Password<sup className="text-pink-200 ml-1">*</sup>
            </p>
            <input
              className="w-full bg-richblack-700 mt-2 py-3 px-2 outline-none rounded-lg border-b-[2px] text-richblack-5 placeholder-richblack-300 border-richblack-500"
              required
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
            />
            <span
              className="absolute top-[48px] text-xl right-2 cursor-pointer"
              onClick={() => {
                setShowConfirmPass((prev) => !prev);
              }}
            >
              {!showConfirmPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
      </div>
      <button type="submit" className="w-full bg-yellow-50 leading-[26px] font-medium py-2 my-5 font-inter text-black text-[17px] rounded-xl">
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
