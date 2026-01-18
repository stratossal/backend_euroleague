import { Router } from "express";
import * as teamCtrl from "../controllers/team.controller"
import { authenticate } from "../middlewares/auth.middleware";

const router = Router()

/**
 * @openapi
 * /teams:
 *   get:
 *     summary: List all teams
 *     tags: [Teams]
 *     security: []
 *     responses:
 *       200:
 *         description: List of all teams
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   city:
 *                     type: string
 *                   stadium:
 *                     type: string
 */


router.get("/",teamCtrl.list)

/**
 * @openapi
 * /teams/{id}:
 *   get:
 *     summary: Get a single team by ID
 *     tags: [Teams]
 *     security: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Team found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 city:
 *                   type: string
 *                 stadium:
 *                   type: string
 *       404:
 *         description: Team not found
 */


router.get("/:id",teamCtrl.getOne)

export default router 