const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema(
 {   name: {type: String, required: true},
    age:{type: Number, required: true},
    gender:{type:String, required:true}
},
{
    versionKey: false,
    timestamps: true,
  }
);

const Teacher = mongoose.model("user", teacherSchema); 
module.exports = Teacher;
