import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

export const validateObjectId = (paramName: string = 'id') => (req: Request, res: Response, next: NextFunction) => {
  const paramValue = req.params[paramName];
  
  // Έλεγχος αν υπάρχει
  if (!paramValue) {
    return res.status(400).json({message: `Missing parameter: ${paramName}`});
  }
  
  // Έλεγχος αν είναι array
  if (Array.isArray(paramValue)) {
    return res.status(400).json({message: `Parameter ${paramName} should not be an array`});
  }
  
  // Έλεγχος αν είναι valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(paramValue)) {
    return res.status(400).json({message: "Not correct ObjectId"});
  }
  
  next();
};