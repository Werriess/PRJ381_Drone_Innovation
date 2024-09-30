import mongoose from "mongoose";

const statsSchema  = new mongoose.Schema({
    gas: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    }
});

statsSchema.set("autoIndex", true);

const stats = mongoose.model("Stats", statsSchema);
export default stats;
