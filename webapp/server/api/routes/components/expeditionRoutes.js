import express from "express";
import isAuthenticated from "../../../middleware/auth.js";
import { getUserExpeditions, updateExpedition } from "../../controller/components/expeditionController.js";

const expeditionRouter = express.Router();

expeditionRouter.get("/user/expeditions", isAuthenticated, getUserExpeditions);
expeditionRouter.put("/expeditions/update/:expeditionID", isAuthenticated, updateExpedition)

export default expeditionRouter;
