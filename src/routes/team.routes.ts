import { Router } from "express";
import * as teamCtrl from "../controllers/team.controller"

const router = Router()

router.get("/",teamCtrl.list )

export default router 