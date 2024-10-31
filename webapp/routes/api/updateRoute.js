import express from "express";
import Register from "../../models/register.js";
//import isAuthenticated from "../../middleware/auth.js";
import isAuthenticated from "./verifyToken.js";
import bcrypt from "bcrypt";

const updateRouter = express.Router();

updateRouter.put("/updateUser",isAuthenticated, async (req, res) => {
    const { firstName, lastName, emailAddress, username, password } = req.body;
  const userId = req.user.id; 
    try{
        const updatedUser = await Register.findByIdAndUpdate(userId, {firstName, lastName, emailAddress, username, password,}, {new: true});

        if (!updatedUser) {
            
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser);
    }catch(error) {
        console.error("Error updating user:", error);
        res.status(500).json({message:"Error updating user."});
    }
});

updateRouter.put("/updateUserPassword", isAuthenticated, async (req, res) => {
    const { password } = req.body;
    const userId = req.user.id;
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Hash password
  
      const updatedUser = await Register.findByIdAndUpdate(userId, { password: hashedPassword }, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Error updating user." });
    }
  
});

updateRouter.get("/getUser", isAuthenticated, async (req, res) => {
    try{
        const user = await Register.findOne({username: req.user.username});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    }catch(error) {
        console.error("Error getting user:", error);
        res.status(500).json({message:"Error fetching user."});
    }
});

export default updateRouter;