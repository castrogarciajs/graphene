import Task from "../collections/task";
import User from "../collections/user";

type TaskSchema = {
  id: string | number;
  title: string;
  description?: string;
};
type UserSchema = {
  id: string | number;
  name: string;
  task_id: string;
};

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

    /**Found by id */

    async task(_: unknown, args: TaskSchema) {
      const { id } = args;
      const task = await Task.findById(id);

      return task;
    },

    async user(_: unknown, args: UserSchema) {
      const { id } = args;
      const user = await User.findById(id);

      return user;
    },
  },
  Mutation: {
    async create_task(_: unknown, args: TaskSchema) {
      const { title, description } = args;
      const instances = new Task({ title, description });
      const task = await instances.save();

      return task;
    },

    delete_task(_: unknown, args: TaskSchema) {
      const { id } = args;
      const deleted = Task.findByIdAndDelete(id);

      if (!deleted) throw new Error("Task not found");

      return deleted;
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

    delete_user(_: unknown, args: UserSchema) {
      const { id } = args;
      const deleted = User.findByIdAndDelete(id);

      if (!deleted) throw new Error("User not found");

      return deleted;
    },
  },
};
