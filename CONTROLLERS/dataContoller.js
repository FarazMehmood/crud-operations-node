const mongoose = require("mongoose");
const DATA = require("../MODELS/data");
const getData=async(req, res , next)=>{
   const data = await DATA.find({});

   res.json({data : data});
};



exports.getData = getData;