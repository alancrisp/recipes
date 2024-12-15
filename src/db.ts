import mysql from "mysql2";
import dbConfig from "../config/db.config";

const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
  });

  connection.connect(err => {
    if (err) throw err;
    console.log('Successfully connected to the database.');
  });

  return connection;
};

export = getConnection;
