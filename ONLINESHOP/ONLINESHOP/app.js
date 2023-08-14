require("dotenv").config();
const express = require("express");
const path = require("path");
const appRouter = require("./routes/appRouter");
const mongoose = require("mongoose");


const uri = process.env.MONGODB_CONNECTION_STRING;

mongoose
  .connect(uri)
  .then(() => {
    console.log(`Connected to the database!!`);
  })
  .catch((error) => {
    console.log(error.message);
  });

const app = express();
const port = 1234;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/", appRouter);


app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});