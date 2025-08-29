import mongoose from "mongoose";
import {mongo_uri} from "../../config"





export default function connectMongodb(uri){
    mongoose.connect(uri) 
    .then(()=>console.log("Connected to mongo db"))
    .catch((e)=>{
        console.log(e);
        console.log("Error occurend while connecting to db");
    })
}

