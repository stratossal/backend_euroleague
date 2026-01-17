import {Router} from "express"
import * as userCtrl from "../controllers/user.controller"
import { validate } from "../middlewares/validate.middlewares"
import { validateObjectId } from "../middlewares/validateObjectId.middlewares"
import { createUserSchema, updateUserSchema } from "../validators/user.validator"
import { authenticate } from "../middlewares/auth.middleware"


const router = Router()

/**
 * @openapi
 * /users:
 *  get:
 *    summary: List of all users
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: Response list of users 
 */

router.get("/",authenticate,userCtrl.list )

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 *       400:
 *         description: Invalid user ID
 *       404:
 *         description: User not found
 */


router.get("/:id",authenticate,validateObjectId("id"),userCtrl.getOne)

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Creates a user
 *     tags: [Users]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstname
 *               - lastname
 *               - email
 *               - country
 *               - password
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               country:
 *                 type: string
 *               address:
 *                 type: object
 *                 properties:
 *                   area:
 *                     type: string
 *                   street:
 *                     type: string
 *                   number:
 *                     type: string
 *                   po:
 *                     type: string
 *                   municipality:
 *                     type: string
 *               phone:
 *                 type: string
 *               favTeam:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */

router.post("/",validate(createUserSchema),userCtrl.create)

/**
 * @openapi
 * /users/{id}:
 *   put:
 *     summary: Update user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: User not found
 */

router.put("/:id",authenticate,validate(updateUserSchema),validateObjectId("id"),userCtrl.update)

/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User deleted
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: User not found
 */

router.delete("/:id",authenticate,validateObjectId("id"),userCtrl.remove)

export default router