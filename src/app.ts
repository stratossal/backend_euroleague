import express from "express"
import morgan from "morgan"

import userRoutes from "./routes/user.routes"
import roleRoutes from "./routes/role.routes"
import playerRoutes from "./routes/player.routes"
import teamRoutes from "./routes/team.routes"
import authRoutes from "./routes/auth.routes"

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/roles", roleRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/players", playerRoutes)
app.use("/api/teams", teamRoutes)

export default app