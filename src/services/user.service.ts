import User from "../models/user.model"

export const findAllUsers = async()=>{
  return User.find().lean()
}

export const createRole = async(payload:Object)=>{
  const result = new User(payload)
  return result.save()
}

export const updateUser = async(id: string, payload:Object)=>{
  return User.findByIdAndUpdate(id, payload, {new: true})
}

export const deleteUser = async(id: string)=>{
  return User.findByIdAndDelete(id)
}