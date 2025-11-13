import mongoose from "mongoose"

export const findAllTeams = async()=>{
   const db = mongoose.connection.db!
  return db.collection('teams').find().toArray()
}