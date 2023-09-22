import Task from "../collections/Task.js";

export const resolvers = {
  Query: {},
  Mutation: {
    async create(_, args) {
      const { name, description } = args;

      const instances = new Task({ name, description });

      const task = await instances.save();
      return task;
    },
  },
};
