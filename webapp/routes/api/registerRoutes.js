import express from "express";
import Register from "../../models/register.js";

const registerRouter = express.Router();

registerRouter.post("/register", async (req, res) => {
  const { firstName, lastName, emailAddress, username, password, userId } =
    req.body;

  try {
    const newRegister = new Register({
      firstName,
      lastName,
      emailAddress,
      username,
      password,
      userId,
    });

    await newRegister.save();
    res.send(req.body);
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Error saving user." });
  }
});

export default registerRouter;
