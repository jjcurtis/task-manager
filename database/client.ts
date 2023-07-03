import { Client } from 'pg';
import { config } from 'dotenv';
config();

const client = new Client(process.env.DATABASE_URL);

export async function readTodos() {
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

