const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
//import jwt from "jsonwebtoken";
//import dotenv from "dotenv";

dotenv.config();

const isAuthenticated = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.DIY_JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = isAuthenticated;
//export default isAuthenticated;
