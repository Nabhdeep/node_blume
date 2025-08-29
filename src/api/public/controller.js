import { appendToSheet } from "../../services/googleSheets";


export const home = async(req , res)=>{
  console.log(req.body);
  await appendToSheet(req.body)
  return res.status(200).json({"msg":"ok"})
}