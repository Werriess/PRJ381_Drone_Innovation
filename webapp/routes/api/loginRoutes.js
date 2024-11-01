const express = require("express");
const Register = require("../../models/register");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

/*
import express from "express";
import Register from "../../models/register.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
*/

dotenv.config();

const loginRouter = express.Router();

loginRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Register.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const accessToken = jwt.sign(
      { username: user.username, id: user.id },
      process.env.DIY_JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", accessToken });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = loginRouter;
//export default loginRouter;
