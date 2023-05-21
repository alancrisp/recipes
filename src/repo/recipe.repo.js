const db = require('../db.js');

const getRecipes = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM recipe', (error, result) => {
      if (error) throw error;
      resolve(result);
    });
  });
}

const getRecipe = (recipeId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM recipe WHERE recipeId=?', [recipeId], (error, result) => {
      if (error) throw error;
      resolve(result[0]);
    });
  });
}

const createRecipe = (name) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO recipe (name) VALUES (?)', [name], (error, result) => {
      if (error) throw error;
      resolve(result.insertId);
    });
  });
}

module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
}
