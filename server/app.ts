import express from 'express';
import cors from 'cors'
import { config } from 'dotenv';
import todosRouter from './routes/todos'

config()
const app = express();

app.use(express.json());
app.use(cors())
app.use('/api/todos', todosRouter)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.listen(process.env.PORT)

export default app;
