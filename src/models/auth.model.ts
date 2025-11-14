import {Types} from "mongoose"

export interface AuthPayload {
  email: string,
  firstname:string,
  lastname:string,
  country:string
  roles: Types.ObjectId[] 
}