// Import the required modules
import express from "express";
const router = express.Router();

// Import the Controllers

// Course Controllers Import
import {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getInstructorCourses,
  deleteCourse,
  getFullCourseDetails,
  editCourse,
  timeDuration,
} from "../controllers/Coures.js";

// Categories Controllers Import
import {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} from "../controllers/Category.js";

// Sections Controllers Import
import {
  createSection,
  updateSection,
  deleteSection,
} from "../controllers/Section.js";
// Sub-Sections Controllers Import
import {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} from "../controllers/SubSection.js";

// Rating Controllers Import
import {
  createRating,
  getAverageRating,
  getAllRating,
} from "../controllers/RatingAndReviews.js";

import {
  updateCourseProgress,
  removeCourseProgress,
} from "../controllers/courseProgress.js";

// Importing Middlewares
import { auth, isInstructor, isStudent, isAdmin } from "../middlewares/auth.js";

// // ********************************************************************************************************
// //                                      Course routes
// // ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createCourse", auth, isInstructor, createCourse);
//Add a Section to a Course
router.post("/addSection", auth, isInstructor, createSection);
// Update a Section
router.post("/updateSection", auth, isInstructor, updateSection);
// Delete a Section
router.post("/deleteSection", auth, isInstructor, deleteSection);
// Edit Sub Section
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
// Delete Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);
// Add a Sub Section to a Section
router.post("/addSubSection", auth, isInstructor, createSubSection);
// Get all Registered Courses
router.get("/getAllCourses", getAllCourses);
// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails);
//Get Total Time Duration of perticuler Course
router.post("/timeDuration", timeDuration);
// Get Details for a Specific Courses
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
// Edit Course routes
router.post("/editCourse", auth, isInstructor, editCourse);
// Get all Courses Under a Specific Instructor
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses);
// Delete a Course
router.delete("/deleteCourse", auth, isInstructor, deleteCourse);
// Post update course progress
router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);
// Post remove courses subsections from course progress
router.post("/removeCourseProgress",auth, isStudent, removeCourseProgress)

// // ********************************************************************************************************
// //                                      Category routes (Only by Admin)
// // ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategories);
router.post("/getCategoryPageDetails", categoryPageDetails);

// // ********************************************************************************************************
// //                                      Rating and Review
// // ********************************************************************************************************
router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRating);

export default router;
