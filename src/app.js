import http from 'http'
import express from './services/express'
import api from './api'
import {apiRoot , env , port , ip , mongo_uri} from './config'
// import connectMongodb from './services/mongoose'

const app = express(apiRoot , api)
const server = http.createServer(app)


setImmediate(()=>{
    server.listen(port , ip, ()=>{
        // connectMongodb(mongo_uri) // on server start start mongodb
        console.log(`Express server listening on http://${ip}:${port}, in mode ${env}`);
    })
})


export default app