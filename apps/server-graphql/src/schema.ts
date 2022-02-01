import { v4 as uuidv4 } from 'uuid';

import { builder } from './builder';
import { ITodo } from 'lib/types';

export const Todo = builder.objectRef<ITodo>('Todo');

const TodoItems = new Array<ITodo>();

Todo.implement({
  fields: (t) => ({
    uuid: t.exposeString('uuid'),
    description: t.exposeString('description'),
    completed: t.exposeBoolean('completed'),
  }),
});

const DEFAULT_PAGE_SIZE = 10;

builder.queryType({
  fields: (t) => ({
    todo: t.field({
      type: [Todo],
      args: {
        take: t.arg.int(),
        skip: t.arg.int(),
      },
      resolve: (_, args) =>
        [...TodoItems.values()].slice(
          args.skip ?? 0,
          args.take ?? DEFAULT_PAGE_SIZE
        ),
    }),
  }),
});

const InsertTodo = builder.inputType('InsertTodoItem', {
  fields: (t) => ({
    description: t.string({ required: true }),
  }),
});

const UpdateTodo = builder.inputType('UpdateTodoItem', {
  fields: (t) => ({
    uuid: t.string({ required: true }),
    description: t.string(),
    completed: t.boolean(),
  }),
});

builder.mutationType({
  fields: (t) => ({
    insertTodo: t.field({
      type: Todo,
      args: {
        input: t.arg({ type: InsertTodo, required: true }),
      },
      resolve: (_, args) => {
        const item = {
          uuid: uuidv4(),
          description: args.input.description,
          completed: false,
        };
        TodoItems.push(item);
        return item;
      },
    }),
    updateTodo: t.field({
      type: Todo,
      args: {
        input: t.arg({ type: UpdateTodo, required: true }),
      },
      resolve: (_, args) => {
        const item = TodoItems.find((i) => i.uuid == args.input.uuid);
        if (item) {
          item.completed = args.input.completed || item.completed;
          item.description = args.input.description || item.description;
        } else {
          throw new Error(
            `uuid of ${args.input.uuid} does not match an existing uuid`
          );
        }
        return item;
      },
    }),
  }),
});

export const schema = builder.toSchema({});
