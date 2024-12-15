import express, { Request, Response, NextFunction } from "express"
var router = express.Router();
var recipeRepo = require('../src/repo/recipe.repo');

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  recipeRepo.getRecipes().then((recipes: any) => {
    res.render('index', { title: 'Recipes', recipes: recipes });
  });
});

/* TODO rename router if recipe routes stay here */
router.get('/recipe/:recipeId', (req: Request, res: Response, next: NextFunction) => {
  recipeRepo.getRecipe(req.params.recipeId).then((recipe: any) => {
    res.render('recipe', { recipe: recipe });
  });
});

router.post('/recipe/add', (req: Request, res: Response, next: NextFunction) => {
  recipeRepo.createRecipe(req.body.name).then((recipeId: any) => {
    res.redirect('/recipe/' + recipeId);
  });
});

module.exports = router;
