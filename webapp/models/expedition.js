import mongoose from "mongoose";

const expeditionSchema = new mongoose.Schema({
  droneID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Drone",
    required: true,
  },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  gasStats: {
    avgValue: { type: Number, required: true },
    highestValue: { type: Number, required: true },
    lowestValue: { type: Number, required: true },
  },
});

const Expedition = mongoose.model("Expedition", expeditionSchema);
export default Expedition;
