import dns from "dns";

dns.setServers(["1.1.1.1"]);

import connectDB from "./db/index.js";

connectDB();

/*
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    } catch (error) {
        console.log("ERROR:",error)
        throw err
    }
})()*/