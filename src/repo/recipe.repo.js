const db = require('../db.js');

const getRecipes = (callback) => {
  db.query('SELECT * FROM recipe', callback);
}

const getRecipe = (recipeId, callback) => {
    db.query('SELECT * FROM recipe WHERE recipeId=?', [recipeId], callback);
}

module.exports.getRecipes = getRecipes;
module.exports.getRecipe = getRecipe;
