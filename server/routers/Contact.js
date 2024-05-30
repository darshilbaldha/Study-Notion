// Import the required modules
import express from "express";
const router = express.Router();
import {contactUsController} from "../controllers/ContactUS.js"


router.post("/contact", contactUsController)

export default router;