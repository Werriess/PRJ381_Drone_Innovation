import Expedition from "../../../models/expedition";

export const addExpedition = async (req, res) => {
  try {
    const { droneID, startTime, endTime, latitude, longitude, carbonMonoxide, methane, butane, liquefiedPetroleumGas, feedback } = req.body;

    if (!droneID || !startTime || !endTime || !latitude || !longitude || !carbonMonoxide || !methane || !butane || !liquefiedPetroleumGas) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const expedition = new Expedition({
      droneID,
      startTime,
      endTime,
      location: {
        latitude,
        longitude,
      },
      gasStats: {
        carbonMonoxide,
        methane,
        butane,
        liquefiedPetroleumGas,
      },
      feedback,
    });
    await expedition.save();

    return res.status(201).json({ message: "Expedition added successfully", expedition });
    
  } catch (error) {
    console.error("Error adding expedition:", error);
    return res.status(500).json({ message: "Failed to add expedition", error: error.message });
  }
};
