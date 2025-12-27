import mongoose from "mongoose";
// import express from "express";
import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.db.js";
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 7000, () => {
      console.log(`Sever is running on port: ${process.env.PORT || 7000}`);
    });

    app.on("error", (err) => {
      console.log("Error: ", err);
    });
  })

  .catch((err) => {
    console.log("MongoDB connection failed :", err);
  });
