import { Router } from "express";
import { getUser } from "../Controllers/General.Controller.js";

const generalRouter = Router();

generalRouter.get("/user/:id", getUser);

export default generalRouter;
