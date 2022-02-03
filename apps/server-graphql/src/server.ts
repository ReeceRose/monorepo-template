import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { schema } from './schema';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 GraphQL server started at https://localhost:${3000}`);
});
