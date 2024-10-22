import express from "express";
import Stats from "./models/stats.js";
import isAuthenticated from "./middleware/auth.js";

const dbRouter = express.Router();

dbRouter.get("/stats", isAuthenticated, async (req, res) => {
  try {
    const userId = req.user._id;

    const stats = await Stats.find({ userID: userId });

    res.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ message: "Error fetching stats" });
  }
});

export default dbRouter;
