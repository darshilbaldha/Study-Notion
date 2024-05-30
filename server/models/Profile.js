import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    dateOfBirth:{
        type:String,
    },

    gender:{
        type:String,
    },

    about:{
        type:String,
        trim:true
    },
    contactNumber: {
        type: Number,
        trim:true
    },
})

export default mongoose.model("Profile",profileSchema)