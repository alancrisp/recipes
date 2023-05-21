const db = require('../db.js');

const getRecipes = (callback) => {
  db.query('SELECT * FROM recipe', callback);
}

const getRecipe = (recipeId, callback) => {
    db.query('SELECT * FROM recipe WHERE recipeId=?', [recipeId], callback);
}

const createRecipe = (name, callback) => {
    db.query('INSERT INTO recipe (name) VALUES (?)', [name], callback);
}

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
}
