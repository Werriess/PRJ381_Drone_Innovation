import mongoose from "mongoose";

const droneSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  gasStats: [
    {
      gasType: { type: String, required: true },
      concentration: { type: Number, required: true },
    },
  ],
  route: [
    {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
      altitude: { type: Number, required: true },
    },
  ],
});

const Drone = mongoose.model("Drone", droneSchema);
export default Drone;
