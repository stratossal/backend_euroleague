import {Router} from "express"
import * as userCtrl from "../controllers/user.controller"
import { validate } from "../middlewares/validate.middlewares"
import { validateObjectId } from "../middlewares/validateObjectId.middlewares"
import { createUserSchema, updateUserSchema } from "../validators/user.validator"
import { authenticate } from "../middlewares/auth.middleware"

const router = Router()

router.get("/",authenticate,userCtrl.list )
router.get("/:id",authenticate,validateObjectId("id"),userCtrl.getOne)
router.post("/",validate(createUserSchema),userCtrl.create)
router.put("/:id",authenticate,validate(updateUserSchema),validateObjectId("id"),userCtrl.update)
router.delete("/:id",authenticate,validateObjectId("id"),userCtrl.remove)

export default router