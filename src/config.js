import path from 'path'
import merge from 'lodash/merge'

const requireProcessEnv = (envVar)=>{
    if(!process.env[envVar]){
        throw new Error(`===========${envVar} not found in config file=========`);
    }
    return process.env[envVar]
};

if(process.env.NODE_ENV!== 'production'){
    const dotenv = require('dotenv-safe')
    dotenv.config({
        path:path.join(__dirname,'../.env'),
        'example':path.join(__dirname,'../.env.example')
    });
}

const config = {
    all:{
        env:process.env.NODE_ENV || 'development',
        root:path.join(__dirname,'..'),
        port:process.env.PORT || 9000,
        ip:process.env.IP || '0.0.0.0',
        apiRoot:process.env.API_ROOT || "",
        defaultEmail: requireProcessEnv('DEFAULT_EMAIL'),
        mongo_uri:requireProcessEnv("MONGO_URI"),
        public_sheet_id:requireProcessEnv("PUBLIC_SHEET_ID")
    }
}

module.exports = merge(config.all , config[config.all.env])
export default module.exports;