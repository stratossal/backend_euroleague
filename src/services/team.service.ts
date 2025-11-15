import mongoose from "mongoose"
import Team from "../models/team.model"

export const findAllTeams = async()=>{
   const db = mongoose.connection.db!
  return db.collection('teams').find().toArray()
}

export const findTeamById = async (id: string) => {
  const teamId = new mongoose.Types.ObjectId(id)
  const result = await Team.aggregate([
    { $match: { _id: teamId } },
    {
      $lookup: {
        from: "players",
        localField: "teamId",
        foreignField: "teamId",
        as: "players"
      }
    }
  ]);
  return result[0]
}