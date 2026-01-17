import { Router } from "express";
import * as roleCtrl from "../controllers/role.controller"
import { validateObjectId } from "../middlewares/validateObjectId.middlewares";
import { validate } from "../middlewares/validate.middlewares";
import { createRoleSchema,updateRoleSchema } from "../validators/role.validator";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router()

/**
 * @openapi
 * /roles:
 *   get:
 *     summary: List all roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: List of roles
 */


router.get("/", roleCtrl.list)

/**
 * @openapi
 * /roles:
 *   post:
 *     summary: Create a role
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Role created
 */


router.post("/",authenticate,validate(createRoleSchema),roleCtrl.create)

/**
 * @openapi
 * /roles/{id}:
 *   put:
 *     summary: Update a role
 *     tags: [Roles]
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
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Role updated
 *       404:
 *         description: Role not found
 */


router.put("/:id",authenticate,validate(updateRoleSchema),validateObjectId("id"), roleCtrl.update)

/**
 * @openapi
 * /roles/{id}:
 *   delete:
 *     summary: Delete a role
 *     tags: [Roles]
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
 *         description: Role deleted
 *       404:
 *         description: Role not found
 */


router.delete("/:id",authenticate,validateObjectId("id"),roleCtrl.remove)

export default router 