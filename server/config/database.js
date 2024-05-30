import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async () => {
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Successfully Connection");
    })
    .catch((error) => {
      console.log("not connect");
      console.log(error);
      process.exit(1);
    });
};

export default connect;