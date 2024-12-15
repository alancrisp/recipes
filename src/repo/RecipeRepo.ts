import { Connection } from "mysql";

class RecipeRepo {
  db: Connection;

  constructor(db: Connection) {
    this.db = db;
  }

  async getRecipes() {
    return new Promise((resolve, reject) => {
      this.db.query('SELECT * FROM recipe', (error: any, result: any) => {
        if (error) throw error;
          resolve(result);
      });
    });
  }

  async getRecipe(recipeId: number) {
    return new Promise((resolve, reject) => {
      this.db.query('SELECT * FROM recipe WHERE recipeId=?', [recipeId], (error: any, result: any) => {
        if (error) throw error;
        resolve(result[0]);
      });
    });
  }

  async createRecipe(name: string) {
    return new Promise((resolve, reject) => {
      this.db.query('INSERT INTO recipe (name) VALUES (?)', [name], (error: any, result: any) => {
        if (error) throw error;
        resolve(result.insertId);
      });
    });
  }
}

export = RecipeRepo;
