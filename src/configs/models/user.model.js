//importing mongoose
const mongoose = require('mongoose')

//creating  users schema
const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, reqyured: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    type: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

//exporting users schema to the users collection
module.exports = mongoose.model('users', userSchema)
