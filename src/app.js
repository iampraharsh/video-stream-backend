import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//configuration
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //understand the URL which contain + or  %
app.use(express.static("public")); // file folder ya pdf store  ke liye
app.use(cookieParser());

//routes import
import userRouter from "../routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
