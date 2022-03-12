const mongoose = require('mongoose')

const strudentSchema = new mongoose.Schema(
  {
    roll_id: { type: String, required: true },
    current_batch: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

module.exports = mongoose.model('students', strudentSchema)
