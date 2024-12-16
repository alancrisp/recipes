import express, { Request, Response, NextFunction } from "express"
import { getRecipes, getRecipe, createRecipe } from '../src/repo/recipe.repo';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getRecipes().then((recipes: any) => {
    res.render('index', { title: 'Recipes', recipes: recipes });
  });
});

/* TODO rename router if recipe routes stay here */
router.get('/recipe/:recipeId', (req: Request, res: Response, next: NextFunction) => {
  const recipeId = parseInt(req.params.recipeId);
  getRecipe(recipeId).then((recipe: any) => {
    res.render('recipe', { recipe: recipe });
  });
});

router.post('/recipe/add', async (req: Request, res: Response, next: NextFunction) => {
  createRecipe(req.body.name).then((recipeId: any) => {
    res.redirect('/recipe/' + recipeId);
  });
});

module.exports = router;
