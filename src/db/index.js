import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance =
      // await mongoose.connect`${process.env.MONGODB_URI}/${DB_NAME}?retryWrites=true&w=majority&tls=true`();
      await mongoose.connect(
        `${process.env.MONGODB_URI}?retryWrites=true&w=majority`
      );
    // console.log("connectionInstance-->", connectionInstance);

    console.log(
      `\n MongoDb Connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb Connection Error", error);
    console.log("Full Error Stack:", error.stack);
    process.exit(1);
  }
};

export default connectDB;
