const { Schema } = require('mongoose')

const ingredientSchema = new Schema(
  {
    recipe_id: { type: Schema.Types.ObjectId, ref: 'recipe' },
    name: { type: String, required: true },
    weight_oz: { type: Number, required: true },
    price: {type: Number, required: true}
    
  },
  { timestamps: true }
)

module.exports = ingredientSchema