import { Router } from "express";
import * as playerCtrl from "../controllers/player.controller"
import { authenticate } from "../middlewares/auth.middleware";

const router = Router()

router.get("/",playerCtrl.list)
router.get("/:id",playerCtrl.getOne)

export default router 