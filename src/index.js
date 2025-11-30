// require("dotenv").config({path: "./.env"});
import dotenv from "dotenv";
import app from "./app.js";

import mongoose from "mongoose";
import connectDB from "./db/db.js";


dotenv.config({ path: "./.env" });

connectDB()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log("Failed to connect to the database", err);
  throw err;
});












/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Database connected successfully!");

    app.on("error", (err) => {
      console.log("App error:", err);
      throw err;
    });

    
    app.listen(process.env.PORT, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    });

  } catch (err) {
    console.log("DB connection error:", err);
    throw err;
  }
})();
*/