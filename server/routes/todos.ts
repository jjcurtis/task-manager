import { Router } from "express";
import { readTodos } from '../../database/client'
const router = Router();

router.get('/', async (req, res) => {
  const todos = await readTodos();
  res.json(todos)
})

export default router;