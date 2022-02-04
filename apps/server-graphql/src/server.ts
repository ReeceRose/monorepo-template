import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';

import { schema } from './schema';

dotenv.config();
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);

app.listen(PORT, () => {
  console.log(`🚀 GraphQL server started at https://localhost:${PORT}`);
});
