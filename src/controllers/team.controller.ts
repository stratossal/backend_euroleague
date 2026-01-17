import {Request , Response , NextFunction} from "express"
import * as teamService from "../services/team.service"

export const list = async (req:Request, res:Response, next:NextFunction)=>{
  try{
    const result = await teamService.findAllTeams()
    res.status(200).json(result)
  }catch(err){
    next(err)
  }  
}

export const getOne = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await teamService.findTeamById(req.params.id!)
    if (!result) 
      return res.status(404).json({message: "Team not found"})
    res.status(201).json(result);
  } catch(err){
    next(err)
  }
}