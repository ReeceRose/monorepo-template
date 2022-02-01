import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { schema } from './schema';

const app = express();

const apolloServer = new ApolloServer({
  schema,
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  console.log(`🚀 GraphQL server started at https://localhost:${PORT}`);
});
