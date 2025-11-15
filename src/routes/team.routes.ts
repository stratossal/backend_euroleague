import { Router } from "express";
import * as teamCtrl from "../controllers/team.controller"
import { authenticate } from "../middlewares/auth.middleware";

const router = Router()

router.get("/",teamCtrl.list)
router.get("/:id",teamCtrl.getOne)

export default router 