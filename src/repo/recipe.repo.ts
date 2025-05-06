import { ResultSetHeader, type Pool, RowDataPacket } from "mysql2/promise";

export interface Recipe extends RowDataPacket {
  recipeId: number;
  name: string;
}

export default class RecipeRepo
{
    private pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    async getRecipes(): Promise<Partial<Recipe>[]> {
        const [results] = await this.pool.execute('SELECT * FROM recipe', []);
        return results as Recipe[];
    }

    async getRecipe(recipeId: number): Promise<Recipe> {
        const [results] = await this.pool.query<Recipe[]>('SELECT * FROM recipe WHERE recipeId = ?', [recipeId]);
        return results[0];
    }

    async createRecipe(name: string): Promise<number> {
        const [result] = await this.pool.query<ResultSetHeader>('INSERT INTO recipe (name) VALUES (?)', [name]);
        return result.insertId;
    }
}

//module.exports.RecipeRepo = RecipeRepo;
