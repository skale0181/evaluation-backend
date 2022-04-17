const express =require("express");
const router =express.Router();
const Teachers=require("../models/teacherModel");
 
router.get("",async (req,res)=>{
    try{
     const teachers= await Teachers.find().lean().exec();
     res.status(200).send(teachers)
    }
    catch(er){
      res.status(400).send(er.message)
    }
})
router.post("",async (req,res)=>{
    try{
     const teachers= await Teachers.create(req.body);
     res.status(200).send(teachers)
    }
    catch(er){
      res.status(400).send(er.message)
    }
})


router.get("/:id",async (req,res)=>{
    try{
     const teachers= await Teachers.findById(req.params.id).lean().exec();
     res.status(200).send(teachers)
    }
    catch(er){
      res.status(500).send(er.message)
    }
})

// router.get("/:name",async (req,res)=>{
//     try{
//      const teachers= await Teachers.findOne({name:req.params.name}).lean().exec();
//      res.status(200).send(teachers)
//     }
//     catch(er){
//       res.status(500).send(er.message)
//     }
// })
module.exports=router