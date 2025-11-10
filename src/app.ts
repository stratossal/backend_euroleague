import express from "express"
import morgan from "morgan"

import User from "./models/user.model"
import Role from "./models/role.model"

const app = express()

app.use(morgan("dev"))

app.get("/about", (req,res)=>{
  res.send("hello users app")
})

export default app