import { Response, Router } from 'express';
import {
  readTodos,
  postTodo,
  deleteTodo,
  updateTodoTask,
  updateTodoDeadlines,
} from '../../database/client';
const router = Router();

async function returnTodos(res: Response) {
  const todos = await readTodos();
  res.json(todos);
}

router.get('/', async (req, res) => {
  returnTodos(res);
});

router.post('/', async (req, res) => {
  await postTodo(req.body);
  returnTodos(res);
});

router.delete('/', async (req, res) => {
  await deleteTodo(req.body);
  returnTodos(res);
});

router.put('/', async (req, res) => {
  await updateTodoTask(req.body);
  returnTodos(res);
});

router.put('/deadline', async (req, res) => {
  await updateTodoDeadlines(req.body);
  returnTodos(res);
});

export default router;
