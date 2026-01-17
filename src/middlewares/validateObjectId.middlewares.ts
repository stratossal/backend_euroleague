import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

export const validateObjectId = (paramName: string = 'id') => (req: Request, res: Response, next: NextFunction) => {
  let paramValue = req.params[paramName];
  if (Array.isArray(paramValue)) paramValue = paramValue[0];
  if (!paramValue) {
    return res.status(400).json({ message: `Missing parameter: ${paramName}` });
  }
  if (!mongoose.Types.ObjectId.isValid(paramValue)) {
    return res.status(400).json({ message: "Not correct ObjectId" });
  }
  req.params[paramName] = paramValue;

  next();
};
