import { NextPage } from 'next';
import { withUrqlClient, WithUrqlProps } from 'next-urql';

export function withGraphQL(page: NextPage<WithUrqlProps>) {
  return withUrqlClient(() => ({
    url: process.env.GRAPHQL_URL || 'http://localhost:3007/query',
    // requestPolicy: 'cache-and-network',
  }))(page);
}
