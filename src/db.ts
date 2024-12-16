import mysql, { ResultSetHeader } from 'mysql2/promise';
import dbConfig from '../config/db.config';

const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

export async function execute<T>(sql: string, params: any): Promise<Partial<T>[]> {
  const [results] = await pool.execute(sql, params);
  return results as T[];
}

export async function insert(sql: string, params: any) {
  const [result] = await pool.execute(sql, params);
  return result as ResultSetHeader;
};
