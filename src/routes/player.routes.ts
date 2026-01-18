import { Router } from "express";
import * as playerCtrl from "../controllers/player.controller"
import { authenticate } from "../middlewares/auth.middleware";

const router = Router()

/**
 * @openapi
 * /players:
 *   get:
 *     summary: List all players
 *     tags: [Players]
 *     security: []
 *     responses:
 *       200:
 *         description: List of all players
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   firstname:
 *                     type: string
 *                   lastname:
 *                     type: string
 *                   team:
 *                     type: string
 *                   position:
 *                     type: string
 *                   number:
 *                     type: number
 */

router.get("/",playerCtrl.list)

/**
 * @openapi
 * /players/{id}:
 *   get:
 *     summary: Get a single player by ID
 *     tags: [Players]
 *     security: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Player found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 firstname:
 *                   type: string
 *                 lastname:
 *                   type: string
 *                 team:
 *                   type: string
 *                 position:
 *                   type: string
 *                 number:
 *                   type: number
 *       404:
 *         description: Player not found
 */


router.get("/:id",playerCtrl.getOne)

export default router 