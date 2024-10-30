import express from "express";
import isAuthenticated from "../../middleware/auth.js";
import UserDrone from "../../models/userDrone.js";
import Drone from "../../models/drone.js";
import DroneExpedition from "../../models/droneExpedition.js"; 
import Expedition from "../../models/expedition.js"; 

const statsRouter = express.Router();

async function getDroneStats(droneID, userId) {
  const accessRecord = await UserDrone.findOne({
    userID: userId,
    droneID: droneID,
  });
  if (!accessRecord) {
    throw new Error("Access denied: user does not have access to this drone.");
  }
  const droneStats = await Drone.findOne({ _id: droneID });
  return droneStats;
}

async function getExpeditionsForDrone(droneID) {
  const droneExpeditions = await DroneExpedition.find({ droneID });
  const expeditionIDs = droneExpeditions.map(de => de.expeditionID);
  return await Expedition.find({ _id: { $in: expeditionIDs } });
}

statsRouter.get("/stats/drones/:droneID", isAuthenticated, async (req, res) => {
  const userId = req.user.id;
  const droneID = req.params.droneID;

  try {
    const droneStats = await getDroneStats(droneID, userId);

    if (!droneStats) {
      return res.status(404).json({ message: "Drone stats not found" });
    }
    const expeditionData = await getExpeditionsForDrone(droneID);

    res.status(200).json({ droneStats, expeditionData });
  } catch (error) {
    console.error("Error fetching drone stats:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default statsRouter;
