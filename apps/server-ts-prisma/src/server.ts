import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { ITodo } from 'lib/types';

dotenv.config();
const prisma = new PrismaClient();
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/todo', async (_: Request, res: Response) => {
  const todoItems = await prisma.todo.findMany();
  res.json({ data: todoItems });
});

app.post('/todo', async (req: Request, res: Response) => {
  const { description } = req.body;

  const result = await prisma.todo.create({
    data: {
      description: description,
      completed: false,
    },
  });

  return res.json({ data: result });
});

app.put('/todo', async (req: Request, res: Response) => {
  const item: ITodo = req.body;
  if (!item.id) return res.json({ error: 'uuid required' });
  const original = await prisma.todo.findUnique({
    where: { id: Number(item.id) },
  });

  if (original) {
    original.completed = item.completed || original.completed;
    original.description = item.description || original.description;
  } else {
    return res.json({
      error: `uuid of ${item.id} does not match an existing uuid`,
    });
  }

  const result = await prisma.todo.update({
    where: { id: Number(original.id) },
    data: {
      description: original.description,
      completed: original.completed,
    },
  });
  return res.json({ data: result });
});

app.listen(PORT, () => {
  console.log(`🚀 Express server started at https://localhost:${PORT}`);
});
