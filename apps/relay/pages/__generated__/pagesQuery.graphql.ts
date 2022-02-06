/**
 * @generated SignedSource<<8f62a65f55b2992ac42119b691c455e3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesQuery$variables = {};
export type pagesQueryVariables = pagesQuery$variables;
export type pagesQuery$data = {
  readonly todos: ReadonlyArray<{
    readonly id: string;
    readonly description: string;
    readonly completed: boolean;
  }>;
};
export type pagesQueryResponse = pagesQuery$data;
export type pagesQuery = {
  variables: pagesQueryVariables;
  response: pagesQuery$data;
};

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      concreteType: 'Todo',
      kind: 'LinkedField',
      name: 'todos',
      plural: true,
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'description',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'completed',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'pagesQuery',
      selections: v0 /*: any*/,
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'pagesQuery',
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: '004e0f8562ab8a88c38d978c1be75e15',
      id: null,
      metadata: {},
      name: 'pagesQuery',
      operationKind: 'query',
      text: 'query pagesQuery {\n  todos {\n    id\n    description\n    completed\n  }\n}\n',
    },
  };
})();

(node as any).hash = '0aa9fb9bfbe5e03b9083e17d31d6bf52';

export default node;
