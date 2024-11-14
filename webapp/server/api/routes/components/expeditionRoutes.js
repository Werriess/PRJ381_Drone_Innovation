import express from "express";
import isAuthenticated from "../../../middleware/auth.js";


const expeditionRouter = express.Router();

expeditionRouter.post("/stats/expedtion/add", isAuthenticated, updateUser);

export default expeditionRouter;
