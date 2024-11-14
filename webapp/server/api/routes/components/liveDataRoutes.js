import express from "express";
import { handleAnalogData } from "../../controller/components/liveDataController.js";


const liveDataRouter = express.Router();

liveDataRouter.post("/data", handleAnalogData);

export default liveDataRouter;
