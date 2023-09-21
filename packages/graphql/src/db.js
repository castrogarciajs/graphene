import mongoose from "mongoose";
import { UTIL } from "./lib.js";

export const conn = async () => {
  try {
    const db = await mongoose.connect(UTIL.__MONGODB_URI__);

    console.log("Mongodb connected: ", db.connection.name);
  } catch (error) {
    console.error("Error: ", error.message);
    process.exit(1);
  }
};
