import { Router } from "express";
import * as playerCtrl from "../controllers/player.controller"

const router = Router()

router.get("/",playerCtrl.list )

export default router 