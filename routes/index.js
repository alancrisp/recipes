var express = require('express');
var router = express.Router();
var recipeRepo = require('../src/repo/recipe.repo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  recipeRepo.getRecipes((err, rows, fields) => {
    res.render('index', { title: 'Recipes', recipes: rows });
  });
});

module.exports = router;
