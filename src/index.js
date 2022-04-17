const express = require('express');
const connect = require('./configs/db');
const cors = require('cors');

const teacherController = require('./Controllers/teacherController');
const classController = require("./Controllers/classController");
const app = express();

app.use(cors());
app.use(express.json());

app.use('/teacher', teacherController);
app.use('/class', classController);


app.listen(1234, async()=>{
    try {
         await connect()
        console.log("listeninng to port 1234")

    } catch (err) {

        console.log("error", err);
        
    }
})