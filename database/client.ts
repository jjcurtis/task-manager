import { Client } from 'pg';
import { config } from 'dotenv';
config();


export async function readTodos() {
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  try {
    const todos = (
      await client.query('SELECT * from todos')
    ).rows;
    return todos;
  } catch (error) {
    console.error(error);
  }
}

