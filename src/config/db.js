const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect("mongodb+srv://skale:sagar@cluster0.n7yva.mongodb.net/school-database");
}

module.exports = connect;