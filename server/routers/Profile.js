// Import the required modules
import express from "express";
const router = express.Router();

import {
  deleteAccount,
  getAllUserDetails,
  updateDisplayPicture,
  updateProfile,
  getEnrolledCourses,
  instructorDashboard,
} from "../controllers/Profile.js";
import { auth, isInstructor } from "../middlewares/auth.js";

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

//updateprofilepicture
router.put("/updateDisplayPicture", auth, updateDisplayPicture);

//update profile details
router.put("/updateProfile", auth, updateProfile);

//get all user details
router.get("/getUserDetails", auth, getAllUserDetails);

//Route for delete use profile
router.delete("/deleteProfile", auth, deleteAccount);

// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses)

//instuctor Dashboard
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)


export default router;
