const mongoose = require('mongoose')

const evaluationSchema = new mongoose.Schema(
  {
    date_of_evaluation: { type: String, required: true },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    // batch_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'batches',
    //   required: true,
    // },

    student_ids: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

module.exports = mongoose.model('evaluations', evaluationSchema)
