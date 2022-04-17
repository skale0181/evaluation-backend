require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connect = require("./config/db");
const app = express();
const { register, login } = require("./controllers/auth.controller");
const { body, validationResult } = require("express-validator");
const teacherController = require("./controllers/teacher.controller");
const classesController = require("./controllers/class.controller");
app.use(express.json());

app.use(cors());

app.post(
  "/register",
  body("name").notEmpty().withMessage("Please Provide Valid first name"),
  body("email").notEmpty().isEmail().withMessage("Please Provide Valid email"),
  body("password").notEmpty().withMessage("Please Provide Valid last name"),
  register
);
app.post(
  "/login",
  body("name").notEmpty().withMessage("Please Provide Valid first name"),
  body("email").notEmpty().isEmail().withMessage("Please Provide Valid email"),
  body("password").notEmpty().withMessage("Please Provide Valid last name"),
  login
);

app.use("/teachers", teacherController);
app.use("/classes", classesController);

app.listen(process.env.PORT || 1234, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err.message);
  }
  console.log("Listening on port 1234");
});


