import mongoose from "mongoose";
import { UTIL } from "./const";
import process from "node:process";

export const conn = async () => {
  try {
    const db = await mongoose.connect(UTIL.__MONGODB_URI__);

    console.log("Mongodb connected: ", db.connection.name);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error: ", error.message);
    }

    process.exit(1);
  }
};
