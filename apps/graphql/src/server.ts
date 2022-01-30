import { ApolloServer } from 'apollo-server';
import { schema } from './schema';

export const server = new ApolloServer({
  schema,
});
const PORT = process.env.PORT || 3003;

void server.listen(PORT, (error: unknown) => {
  if (error) {
    throw error;
  }

  console.log(`🚀 Server started at https://localhost:${PORT}`);
});
