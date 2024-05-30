import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  courses:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  }],
});

export default mongoose.model("Category",CategorySchema)