import { Schema, model, Document } from "mongoose";

export interface ITeam extends Document {
  teamId: number;
  name: string;
  city: string;
  country: string;
  coach: string;
  arena: string;
  founded: number;
  website: string;
  logo: string;
  standings: {
    wins: number;
    losses: number;
    position: number;
    pointsFor: number;
    pointsAgainst: number;
    pointDifference: number;
  };
  teamStats: {
    pointsPerGame: number;
    reboundsPerGame: number;
    assistsPerGame: number;
    fieldGoalPercentage: number;
    threePointPercentage: number;
    freeThrowPercentage: number;
    defensiveRating: number;
    offensiveRating: number;
  };
}

const TeamSchema = new Schema<ITeam>({
  teamId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  coach: { type: String, required: true },
  arena: { type: String, required: true },
  founded: { type: Number },
  website: { type: String },
  logo: { type: String },
  standings: {
    wins: Number,
    losses: Number,
    position: Number,
    pointsFor: Number,
    pointsAgainst: Number,
    pointDifference: Number
  },
  teamStats: {
    pointsPerGame: Number,
    reboundsPerGame: Number,
    assistsPerGame: Number,
    fieldGoalPercentage: Number,
    threePointPercentage: Number,
    freeThrowPercentage: Number,
    defensiveRating: Number,
    offensiveRating: Number
  }
}, {
  collection: "teams"
});

export default model<ITeam>("Team", TeamSchema);
