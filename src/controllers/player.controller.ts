import {Request , Response , NextFunction} from "express"
import * as playerService from "../services/player.service"

export const list = async (req:Request, res:Response, next:NextFunction)=>{
  try{
    const result = await playerService.findAllPlayers()
    res.status(200).json(result)
  }catch(err){
    next(err)
  }  
}

export const getOne = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const result = await playerService.findPlayerById(id)
    if (!result) 
      return res.status(404).json({message: "Player not found"})
    res.status(201).json(result);
  } catch(err){
    next(err)
  }
}  