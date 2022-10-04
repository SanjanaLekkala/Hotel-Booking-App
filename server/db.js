const mongoose = require("mongoose");



var mongoDBURL='mongodb+srv://sravani:Sravs21@cluster0.cypnc.mongodb.net/Hotelrooms'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose
// var mongoDBURL='mongodb+srv://sathya:sathyapr@cluster0.wrqpt.mongodb.net/sheyrooms'