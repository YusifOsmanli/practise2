const express=require("express")
const app=express()
const PORT=process.env.PORT ||7373
const cors=require("cors")
app.use(express.json())
app.use(cors())
const mongoose=require("mongoose")
require('dotenv').config()
const PulseRouter=require("./Router/Pulse.routes")
mongoose.connect("mongodb+srv://tu7ljr8ww:Allahverdi123@cluster0.hlwgpfm.mongodb.net/").then(res=>{
    console.log("connected")
})


app.use("/pulse",PulseRouter)
app.listen(PORT,()=>{
    console.log("back running on 7373")
})

