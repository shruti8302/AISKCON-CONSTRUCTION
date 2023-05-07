require("dotenv").config();
const express = require("express");
const cors = require("cors");

const {sendMail} = require("./controller/email")

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/email",sendMail);

app.listen(3000,()=>{
  console.log("server started!")
})