import mongoose from "mongoose"

export const findAllPlayers = async()=>{
   const db = mongoose.connection.db!
  return db.collection('players').find().toArray()
}