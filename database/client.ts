import { Client } from 'pg';
import { config } from 'dotenv';
config();
import { ITodo } from '../client/src/interfaces/ITodo';

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

export async function postTodo(todo: ITodo) {
  const client = new Client(process.env.DATABASE_URL);
  const { task, due, completed, deadline } = todo;
  await client.connect();
  try {
    await client.query(
      'INSERT INTO todos (task, due, completed, deadline) VALUES($1, $2, $3, $4)',
      [task, due, completed, deadline]
    );
  } catch (error) {
    console.error(error);
  }
}
