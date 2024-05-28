## SEBR 0429

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3c4987a4-f65d-4155-881a-11f68d602f17_1025x521.png)

# Mongoose Express Recipes


We know how labor intensive and draining Back End Coding can be, especially as the day goes on and our blood sugar starts to drop. Luckily, we can use our coding skills to help keep our energy up by creating a database of recipes for us to use!

For this lab we are going to create a Mongoose db and Express server that has a number of models and routes for each. And then adding in some recipes to populate our database. Don't worry about making anything too complex in this, we're more concerned with you understanding the set up of a db and server, and thinking about embedding and referencing documents than taking the time to write out something that will win you a Michelin star


## Instructions 
- We want to see at least 3 related models, you are free to change this up and make any adjustments that you'd like
- Your models will be - Cuisine type, recipes and directions. Types will be a parent of Recpies, which will be a parent of Directions
- Take your time to plan out the data and relations before you begin setting up your code. Having everything planned out before beginning will be crucial as you move into the more advanced parts of the lesson
- What properties would each model have? "Origin" in Cuisine? "Difficulty" in Recipe? It is totally up to you to decide. And, for the sake of our learning, we are more interested in your planning and decisions on this than getting every single step of this completed and rushed through!
- We want to see you using as many data types as you can. How do we differentiate Oz vs Tsp vs Tsps vs Gms for our ingredients. How should be mark Oven temperature? How about things like Vegan, Gluten Free, Kosher, Halal... Challenge yourself to make this a strong db where you try something you have not done before

  
## Requirements 

- Index and Show routes for each of your models
- Get-ing your data in a way besides just ID 
- Create, Update, and Delete functionality for models as well
- All functionality encapsulated in a Controllers folder
-  At least 1 relation between collections related to each other, with at least 1 part embedded into each other (maybe you want to relate Ingredients to Recipes, while embedding Instructions within Recipes, or maybe go the other way around)
-  Each collection should have at least 3 documents within. You can use a Seed File or your Mongo shell to populate your data

 ## Bonus
 - Make the recipes and share with your class
 - Especially if they are full of choclate and love
 - mmmmm chocolate

![](https://www.foodandwine.com/thmb/5unLsehhjHUTG3CU7GjOsMpmgF4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ina-garten-new-food-network-tv-series-FT-BLOG0222-8ce1460d6041445881d5549a1d3753e1.jpg)

