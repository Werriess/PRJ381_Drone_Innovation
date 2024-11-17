import express from "express";
import isAuthenticated from "../../../middleware/auth.js";
import { getUserExpeditions } from "../../controller/components/expeditionController.js";

const expeditionRouter = express.Router();

expeditionRouter.get("/user/expeditions", isAuthenticated, getUserExpeditions);

export default expeditionRouter;
