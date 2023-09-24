import Task from "../collections/Task";

type TaskSchema = { name: string; description?: string };

export const resolvers = {
  Query: {},
  Mutation: {
    async create(_: any, args: TaskSchema) {
      const { name, description } = args;

      const instances = new Task({ name, description });

      const task = await instances.save();
      return task;
    },
  },
};
