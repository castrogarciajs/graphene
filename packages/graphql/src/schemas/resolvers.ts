import Task from "../collections/task";
import User from "../collections/user";

type TaskSchema = { title: string; description?: string };
type UserSchema = { name: string; task_id: string };

export const resolvers = {
  Query: {
    async tasks() {
      const tasks = await Task.find();

      return tasks;
    },

    async users() {
      const users = await User.find();

      return users;
    },
  },
  Mutation: {
    async create_task(_: unknown, args: TaskSchema) {
      const { title, description } = args;
      const instances = new Task({ title, description });
      const task = await instances.save();

      return task;
    },

    async create_user(_: unknown, args: UserSchema) {
      const { name, task_id } = args;
      const found_task = await Task.findById(task_id);

      if (!found_task)
        throw new Error(
          "Task no found. The task you are trying to search for does not exist"
        );

      const instances = new User({ name, task_id });
      const user = await instances.save();

      return user;
    },
  },
};
