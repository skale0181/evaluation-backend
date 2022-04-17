const mongoose = require("mongoose");

const classesSchema= new mongoose.Schema({
    grade : {type:Number , required:true},
    section: {type:String , required:true},
     subject: {type:String , required:true},
     teachers_id:{type:mongoose.Schema.Types.ObjectId,ref:"teacher",required:true}
},{
    versionKey:false,
    timestamps:true,
})

Class = mongoose.model("class",classesSchema);

module.exports = Class;