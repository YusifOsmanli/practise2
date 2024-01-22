const {Pulse}=require("../Model/Pulse.model")

const PulseController={
    getAll:async(req,res)=>{
        try{
            const target=await Pulse.find({})
            res.send(target)

        }catch(error){
            res.send("item is not found")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const pulse= await Pulse.findById(id)
            res.send(pulse)

        }catch(error){
            res.send("item is not found")
        }
    },
    Post:async(req,res)=>{
        try{
            const {name,desc,price}=req.body
            const NewPulse= new Pulse({name,desc,price})
             await NewPulse.save()
             res.send("item creayed")

        }catch(error){
            res.send("item is not found")
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
             await Pulse.findByIdAndDelete(id)

        }catch(error){
            res.send("item is not found")
        }
    },
}
module.exports={PulseController}