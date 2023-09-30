import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
config({
  path: "./config/config.env",
});

const app = express();
//Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
//Routes
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import payment from "./routes/paymentRoutes.js";
app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
export default app;
app.use(ErrorMiddleware);

//Errors

// cloudinary.v2.upload
//cloudinary.upload
