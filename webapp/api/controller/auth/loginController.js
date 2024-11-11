import Register from "../../../models/register.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    //find user by username
    const user = await Register.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username " });
    }

    //validate password
    /* const isPasswordValid = await bcrypt.compare(password, user.password);
     if (!isPasswordValid) {
       return res.status(401).json({ message: "Invalid password" });
     }*/

    //generate a jwt token
    const accessToken = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );


    //send token to client
    res.json({ message: "Login successful", accessToken });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
};
