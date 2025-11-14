import { Router } from "express";
import * as teamCtrl from "../controllers/team.controller"
import { authenticate } from "../middlewares/auth.middleware";

const router = Router()

router.get("/",authenticate,teamCtrl.list)

export default router 