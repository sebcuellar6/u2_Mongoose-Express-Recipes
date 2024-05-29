const db = require('../db')
const { Type, Recipe, Ingredient } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Type.deleteMany({});
        await Recipe.deleteMany({});
        await Ingredient.deleteMany({});
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
}

const main = async () => {

resetCollections()

    const type1 = await new Type({
        ethnicity: 'Italian',
        famousChef: 'https://www.apple.com',
        haveTried: true
      })
      type1.save()
    
      const type2 = await new Type({
        ethnicity: 'French',
        famousChef: 'Julia Child',
        haveTried: true
      })
      type2.save()
    
      const type3 = await new Type({
        ethnicity: 'Mexican',
        famousChef: 'Gabriel Iglesias',
        haveTried: true
      })
      type3.save()

      const recipeArray = [
        {
          type_id: type1._id,
          name: 'Lasagna',
          prepTime: 30,
          totalTime: 60,
          calories: 200,
          difficulty: 'easy'
        },
        {
            type_id: type1._id,
            name: 'Pizza',
            prepTime: 30,
            totalTime: 60,
            calories: 300,
            difficulty: 'medium'
        },
        {
            type_id: type2._id,
            name: 'Creme Brulee',
            prepTime: 30,
            totalTime: 60,
            calories: 400,
            difficulty: 'medium'
        },
        {
            type_id: type2._id,
            name: 'Souffle',
            prepTime: 30,
            totalTime: 60,
            calories: 500,
            difficulty: 'hard'
        },
        {
            type_id: type3._id,
            name: 'Burrito',
            prepTime: 30,
            totalTime: 60,
            calories: 250,
            difficulty: 'easy'
        },
        {
            type_id: type3._id,
            name: 'Churro',
            prepTime: 30,
            totalTime: 60,
            calories: 350,
            difficulty: 'hard'
        }
      ]

    // recipeArray.save()

    const recipes = await Recipe.insertMany(recipeArray);
    console.log('Created recipes!');

    const ingredientArray = [
        {
            recipe_id: recipes[0]._id,
            name: 'pasta',
            weight_oz: 3,
            price: 5
        },
        {
            recipe_id: recipes[0]._id,
            name: 'sauce',
            weight_oz: 3,
            price: 5
        }
    ];

      //recipeArray.save()
      await Ingredient.insertMany(ingredientArray)
      console.log('Created ingredients!')
}

const run = async () => {
    await main()
    db.close()
}

run()