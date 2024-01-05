import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB();

// ((async) => {
//   try {
//   } catch (error) {
//     console.error("ERROR", error);
//   }
// })();
