import type { RowDataPacket } from "mysql2";
import { execute, insert } from "../db";

interface Recipe extends RowDataPacket {
  recipeId: number;
  name: string;
}

export async function getRecipes(): Promise<Recipe[]> {
  const result = await execute<Recipe>('SELECT * FROM recipe');
  return result as Recipe[];
}

export async function getRecipe(recipeId: number): Promise<Recipe> {
  const result = await execute<Recipe>('SELECT * FROM recipe WHERE recipeId = ?', [recipeId]);
  return result[0] as Recipe;
}

export async function createRecipe(name: string): Promise<number> {
  const result = await insert('INSERT INTO recipe (name) VALUES (?)', [name]);
  return result.insertId;
}
