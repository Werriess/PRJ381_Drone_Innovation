import UserDrone from "../../../models/userDrone.js";
import DroneExpedition from "../../../models/droneExpedition.js";
import Expedition from "../../../models/expedition.js";

export const getUserExpeditions = async (req, res) => {
  const userId = req.user.id; 
  try {
    const userDrones = await UserDrone.find({ userID: userId }).select("droneID");
    if (!userDrones.length) {
      return res.status(404).json({ message: "No drones found for this user." });
    }

    const droneIDs = userDrones.map((userDrone) => userDrone.droneID);

    const droneExpeditions = await DroneExpedition.find({ droneID: { $in: droneIDs } });
    const expeditionIDs = droneExpeditions.map((de) => de.expeditionID);

    if (!expeditionIDs.length) {
      return res.status(404).json({ message: "No expeditions found for this user's drones." });
    }

    const expeditionData = await Expedition.find({ _id: { $in: expeditionIDs } });

    res.status(200).json(expeditionData);
  } catch (error) {
    console.error("Error fetching expeditions for user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
