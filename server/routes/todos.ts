import { Router } from "express";
import { readTodos, postTodo, deleteTodo, updateTodoTask } from '../../database/client'
const router = Router();

router.get('/', async (req, res) => {
  const todos = await readTodos();
  res.json(todos)
})

router.post('/', async (req, res) => {
  await postTodo(req.body);
  const todos = await readTodos();
  res.json(todos)
})

router.delete('/', async (req, res) => {
  await deleteTodo(req.body);
  const todos = await readTodos();
  res.json(todos)
})

router.put('/', async (req, res) => {
  await updateTodoTask(req.body);
  const todos = await readTodos();
  res.json(todos);
})

export default router;