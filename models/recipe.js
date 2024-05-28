const { Schema } = require('mongoose')

const recipeSchema = new Schema(
  {
    type_id: { type: Schema.Types.ObjectId, ref: 'type', required: true },
    name: { type: String, required: true },
    prepTime: { type: Number, required: true },
    totalTime: { type: Number, required: true },
    calories: { type: Number, required: true},
    difficulty: {type: String, required: true}
  },
  { timestamps: true }
)

module.exports = recipeSchema