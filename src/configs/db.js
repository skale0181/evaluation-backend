const mongoose = require("mongoose")

module.exports = () => {
  return mongoose.connect("mongodb+srv://skale:sagar@cluster0.n7yva.mongodb.net/school-database");
};