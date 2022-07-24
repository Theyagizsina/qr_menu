const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require("./route/users");
const authRoute = require("./route/auth");
const catagoryRoute = require("./route/catagory");
const productRoute = require("./route/product");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    ()=>{
    console.log("Connected to mongoDB")
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/catagory", catagoryRoute);
app.use("/api/product", productRoute);

app.listen(8800, ()=>{
    console.log("qr Menu Backend server is running");
});