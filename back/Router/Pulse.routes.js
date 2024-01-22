const express=require("express")
const router=express.Router()
const {PulseController}=require("../Controller/Pulse.controller")
router.get("/",PulseController.getAll)
router.get("/:id",PulseController.getById)
router.post("/",PulseController.Post)
router.delete("/:id",PulseController.delete)
module.exports=router