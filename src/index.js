// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
  path: "./env",
});

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Running at Port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection Failed!!", err);
  });
