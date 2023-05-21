var express = require('express');
var router = express.Router();
var recipeRepo = require('../src/repo/recipe.repo.js');

router.get('/', (req, res, next) => {
  recipeRepo.getRecipes().then((recipes) => {
    res.render('index', { title: 'Recipes', recipes: recipes });
  });
});

/* TODO rename router if recipe routes stay here */
router.get('/recipe/:recipeId', (req, res, next) => {
  recipeRepo.getRecipe(req.params.recipeId).then((recipe) => {
    res.render('recipe', { recipe: recipe });
  });
});

router.post('/recipe/add', (req, res, next) => {
  recipeRepo.createRecipe(req.body.name).then((recipeId) => {
    res.redirect('/recipe/' + recipeId);
  });
});

module.exports = router;
