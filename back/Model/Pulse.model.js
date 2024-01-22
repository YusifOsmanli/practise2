const mongoose=require("mongoose")

const Pulse=mongoose.model("pulse", new mongoose.Schema({
    name:String,
    desc:String,
    price:Number

}))
module.exports={Pulse}