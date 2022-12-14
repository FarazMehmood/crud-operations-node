const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const dataroute = require("./ROUTES/dataRoute");

app.use("/api" , dataroute);

const connectDB=()=>{

    try
    {  
         mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URL);
        console.log("CONNECTED TO MONGODB YEAH");
    }

    catch(err)
    {
        console.log("ERROR" +  err);
    }


}

app.listen(5000, ()=>{
    connectDB();

    console.log(`CONNECTED TO PORT ${process.env.PORT}`);
})