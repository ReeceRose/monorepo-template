import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';

import { ITodo } from 'lib/types';

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3002;

const TodoItems = new Array<ITodo>();

app.get('/todo', (_: Request, res: Response) => res.json({ data: TodoItems }));

app.post('/todo', (req: Request, res: Response) => {
  const item: ITodo = req.body;
  item.uuid = uuidv4();
  item.completed = false;
  TodoItems.push(item);
  return res.json({ data: item });
});

app.put('/todo', (req: Request, res: Response) => {
  const item: ITodo = req.body;
  if (!item.uuid) return res.json({ error: 'uuid required' });
  const original = TodoItems.find((i) => i.uuid == item.uuid);
  if (original) {
    original.completed = item.completed || original.completed;
    original.description = item.description || original.description;
  } else {
    return res.json({
      error: `uuid of ${item.uuid} does not match an existing uuid`,
    });
  }
  return res.json({ data: item });
});

app.listen(PORT, () => {
  console.log(`🚀 Express server started at https://localhost:${PORT}`);
});
