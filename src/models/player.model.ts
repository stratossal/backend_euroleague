import { Schema, model, Document, Types } from "mongoose";

export interface IPlayer extends Document {
  playerId: number;
  name: string;
  team: string;
  teamId: number;
  position: string;
  nationality: string;
  age: number;
  height: number;
  weight: number;
  jerseyNumber: number;
  stats: {
    gamesPlayed: number;
    pointsPerGame: number;
    reboundsPerGame: number;
    assistsPerGame: number;
    stealsPerGame: number;
    blocksPerGame: number;
    fieldGoalPercentage: number;
    threePointPercentage: number;
    freeThrowPercentage: number;
    efficiency: number;
    minutesPerGame: number;
  };
}

const PlayerSchema = new Schema<IPlayer>({
  playerId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  team: { type: String, required: true },
  teamId: { type: Number, required: true, ref: "Team" }, // αν θέλεις populate από Team
  position: { type: String },
  nationality: { type: String },
  age: { type: Number },
  height: { type: Number },
  weight: { type: Number },
  jerseyNumber: { type: Number },
  stats: {
    gamesPlayed: Number,
    pointsPerGame: Number,
    reboundsPerGame: Number,
    assistsPerGame: Number,
    stealsPerGame: Number,
    blocksPerGame: Number,
    fieldGoalPercentage: Number,
    threePointPercentage: Number,
    freeThrowPercentage: Number,
    efficiency: Number,
    minutesPerGame: Number
  }
}, {
  collection: "players"
});

export default model<IPlayer>("Player", PlayerSchema);
