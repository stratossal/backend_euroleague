import mongoose from "mongoose"
import Player from "../models/player.model"

export const findAllPlayers = async()=>{
   const db = mongoose.connection.db!
  return db.collection('players').find().toArray()
}

export const findPlayerById = async (id: string) => {
  const playerId = new mongoose.Types.ObjectId(id);
  const result = await Player.aggregate([
    { $match: { _id: playerId } },
    {
      $lookup: {
        from: "teams",
        localField: "teamId",
        foreignField: "teamId",
        as: "team"
      }
    },
    { $unwind: "$team" }
  ]);
  return result[0];
}