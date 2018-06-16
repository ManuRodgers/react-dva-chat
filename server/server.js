const express = require("express");
const path = require("path");
const fs = require("fs");
const parseurl = require("parseurl");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/user");
const app = express();

// user router
const userRoutes = require("./routes/userRouter");
app.use("/user", userRoutes);

// static
app.use(express.static(path.resolve(__dirname, "../src")));

// http server listening on 8888
app.listen(8888, () => {
  console.log(`node server is running on port:8888`);
});
