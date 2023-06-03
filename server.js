require("dotenv").config();
const express = require("express");

//express app
const app = express();

//port
const port = process.env.PORT || 5000;

//listen
app.listen(port, () => {
  console.log(`server runing on ${port}`);
});