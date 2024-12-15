import getConnection from "../db";

const getRecipes = async () => {
  const db = await getConnection();
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM recipe', (error: any, result: any) => {
      if (error) throw error;
      resolve(result);
    });
  });
}

const getRecipe = async (recipeId: number) => {
  const db = await getConnection();
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM recipe WHERE recipeId=?', [recipeId], (error: any, result: any) => {
      if (error) throw error;
      resolve(result[0]);
    });
  });
}

const createRecipe = async (name: string) => {
  const db = await getConnection();
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO recipe (name) VALUES (?)', [name], (error: any, result: any) => {
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
