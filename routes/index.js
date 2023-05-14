var express = require('express');
var router = express.Router();
var recipeRepo = require('../src/repo/recipe.repo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  recipeRepo.getRecipes((err, rows, fields) => {
    res.render('index', { title: 'Recipes', recipes: rows });
  });
});

/* TODO rename router if recipe routes stay here */
router.get('/recipe/:recipeId', (req, res, next) => {
    recipeRepo.getRecipe(req.params.recipeId, (err, rows, fields) => {
      res.render('recipe', { recipe: rows[0] });
    });
});

module.exports = router;
