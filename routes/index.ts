import express, { Request, Response, NextFunction } from "express"
import pool from "../src/db";
import RecipeRepo from "../src/repo/recipe.repo";

const router = express.Router();
const recipeRepo = new RecipeRepo(pool);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  recipeRepo.getRecipes().then((recipes: any) => {
    res.render('index', { title: 'Recipes', recipes: recipes });
  });
});

/* TODO rename router if recipe routes stay here */
router.get('/recipe/:recipeId', (req: Request, res: Response, next: NextFunction) => {
  const recipeId = parseInt(req.params.recipeId);
  recipeRepo.getRecipe(recipeId).then((recipe: any) => {
    res.render('recipe', { recipe: recipe });
  });
});

router.post('/recipe/add', async (req: Request, res: Response, next: NextFunction) => {
  recipeRepo.createRecipe(req.body.name).then((recipeId: number) => {
    res.redirect('/recipe/' + recipeId);
  });
});

module.exports = router;
