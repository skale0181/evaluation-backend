const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: false},
    gender: {type: String, required: true},
    age: {type:Number, required: true},
},{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("teacher",teacherSchema)