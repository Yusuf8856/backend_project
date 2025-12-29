import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // 🔥 FIRST LINE

import mongoose from "mongoose";
import { app } from "./app.js";
import connectDB from "./db/index.db.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server is running on port: ${process.env.PORT || 7000}`);
    });

    app.on("error", (err) => {
      console.log("Error: ", err);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed :", err);
  });
