import express, { Request, Response, NextFunction } from "express"
import getConnection from "../src/db";
import RecipeRepo from '../src/repo/RecipeRepo';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const recipeRepo = new RecipeRepo(await getConnection());
  recipeRepo.getRecipes().then((recipes: any) => {
    res.render('index', { title: 'Recipes', recipes: recipes });
  });
});

/* TODO rename router if recipe routes stay here */
router.get('/recipe/:recipeId', async (req: Request, res: Response, next: NextFunction) => {
  const recipeRepo = new RecipeRepo(await getConnection());
  const recipeId = parseInt(req.params.recipeId);
  recipeRepo.getRecipe(recipeId).then((recipe: any) => {
    res.render('recipe', { recipe: recipe });
  });
});

router.post('/recipe/add', async (req: Request, res: Response, next: NextFunction) => {
  const recipeRepo = new RecipeRepo(await getConnection());
  recipeRepo.createRecipe(req.body.name).then((recipeId: any) => {
    res.redirect('/recipe/' + recipeId);
  });
});

module.exports = router;
