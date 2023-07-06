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

export async function deleteTodo(todo: ITodo) {
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  try {
    await client.query(
      'DELETE FROM todos WHERE id = $1', [todo.id]
    )
  } catch (error) {
    console.error(error)
  }
}

export async function updateTodoTask(todo: ITodo) {
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  try {
    await client.query(
      'UPDATE todos SET task = $1 WHERE id = $2', [todo.task, todo.id]
    )
  } catch (error) {
    console.error(error)
  }
}

export async function updateTodoDeadlines(todo: ITodo) {
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  try {
    await client.query(
      'UPDATE todos SET due = $1, deadline = $2 WHERE id = $3', [todo.due, todo.deadline, todo.id]
    )
  } catch (error) {
    console.error(error)
  }
}
