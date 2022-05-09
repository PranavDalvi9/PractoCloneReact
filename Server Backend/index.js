
const express = require("express");
const connect = require("./src/configs/db")
let port = process.env.PORT || 2344;
const cors = require("cors");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

app.use(cors());

// const flightController = require("./src/controllers/flightController")

// const airportController = require("./src/controllers/airportController")
 
// app.use("/flight", flightController)
// app.use("/airport", airportController)

// const  {register,login}=require("./src/controllers/auth.user.controller")
// const userController = require("./src/controllers/user.controller");

const {register, login} = require("./src/Controllers/auth.user.controller")


app.post("/register",register)
app.post("/login" ,login)



app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
