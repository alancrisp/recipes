import express, { Request, Response } from "express"
import pool from "../src/db";
import RecipeRepo, { Recipe } from "../src/repo/recipe.repo";

const router = express.Router();
const recipeRepo = new RecipeRepo(pool);

router.get('/', (req: Request, res: Response) => {
  recipeRepo.getRecipes().then((recipes: Partial<Recipe>[]) => {
    res.render('index', { title: 'Recipes', recipes: recipes });
  });
});

/* TODO rename router if recipe routes stay here */
router.get('/recipe/:recipeId', (req: Request, res: Response) => {
  const recipeId = parseInt(req.params.recipeId);
  recipeRepo.getRecipe(recipeId).then((recipe: Recipe) => {
    res.render('recipe', { recipe: recipe });
  });
});

router.post('/recipe/add', async (req: Request, res: Response) => {
  recipeRepo.createRecipe(req.body.name).then((recipeId: number) => {
    res.redirect('/recipe/' + recipeId);
  });
});

module.exports = router;
