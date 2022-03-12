const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema(
  {
    evaluation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'evaluations',
      required: true,
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    marks: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

module.exports = mongoose.model('submissions', submissionSchema)
