import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectInstant = await mongoose.connect(
      `${process.env.MONGOOSE_URL}/${DB_Name}`
    );

    console.log(
      "Mongoo DB connected sucessfully. !! DB HOST:",
      connectInstant.connection.host
    );
  } catch (error) {
    console.log("Mongoose DB connection failed: ", error);
    process.exit(1);
  }
};

export default connectDB;
