const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    grade: { type: String, required: true },
    section: { type: String, required: true },
    subject: { type: String, required: true },
    teacher_id: { type: mongoose.Types.ObjectId, ref:"teacher", required: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("class", classSchema);
