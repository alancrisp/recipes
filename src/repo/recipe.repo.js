const db = require('../db.js');

const getRecipes = (callback) => {
  db.query('SELECT * FROM recipe', callback);
}

module.exports.getRecipes = getRecipes;
