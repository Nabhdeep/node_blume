import { appendToSheet } from "../../services/googleSheets";
import FromDataModel from "./model";
export const home = async(req , res)=>{
  try{
    // await FromDataModel.create(req.body)
    return res.status(200).json({"msg":"created"})
  }catch(err){
    return res.status(200).json({'msg':'ok'})
  }finally{
    await appendToSheet(req.body)
  }
}