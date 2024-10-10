// import express from "express";
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();

// mongoose
//   .connect(process.env.MONGO)
//   .then(() => {
//     console.log('Connected to MongoDB!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const app = express();

// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB!');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });

// const app = express();

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connection Created Successfully")
  } catch (error) {
    console.log(error)
  }
}

Connection()

app.listen(PORT, () => {
  console.log(`Server Running on: ${PORT}`);
});
