import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (_: Request, res: Response) => res.send({ hello: 'world' }));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
