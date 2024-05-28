const mongoose = require('mongoose')
const typeSchema = require('./type')
const recipeSchema = require('./recipe')
const ingredientSchema = require('./ingredient')

const Type = mongoose.model('type', typeSchema)
const Recipe = mongoose.model('recipe', recipeSchema)
const Ingredient = mongoose.model('ingredient', ingredientSchema)


module.exports = {
    Type,
    Recipe,
    Ingredient
}