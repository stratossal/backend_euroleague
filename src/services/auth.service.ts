import User from "../models/user.model"
import { AuthPayload } from "../models/auth.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

export const login = async(email:string, password:string)=>{
  const user = await User.findOne({email}).populate("roles")
  if (!user) return null

  const match = await bcrypt.compare(password, user.password)
  if (!match) return null

  const payload: AuthPayload = {
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
    country:user.country,
    roles: user.roles as any
  }

  const token = jwt.sign(payload as any,JWT_SECRET!, {expiresIn: "2h"})
  console.log(token)
  return {user, token}
}