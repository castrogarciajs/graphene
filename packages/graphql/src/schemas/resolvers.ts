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
      const task = await Task.findById(args.id);

      return task;
    },

    async user(_: unknown, args: UserSchema) {
      const user = await User.findById(args.id);

      return user;
    },
  },

  Mutation: {
    /**------------------------ TASK ---------------------- */
    async create_task(_: unknown, args: TaskSchema) {
      const { title, description } = args;

      const instances = new Task({ title, description });
      const task = await instances.save();

      return task;
    },

    delete_task(_: unknown, args: TaskSchema) {
      const deleted = Task.findByIdAndDelete(args.id);

      if (!deleted) throw new Error("Task not found");

      return deleted;
    },

    async update_task(_: unknown, args: TaskSchema) {
      const updated = await Task.findByIdAndUpdate(args.id, args, {
        new: true,
      });

      if (!updated) throw new Error("Task not found");

      return updated;
    },

    /**----------------------- USER ------------------- */
    async create_user(_: unknown, args: UserSchema) {
      const { name, task_id } = args;
      const found = await Task.findById(task_id);

      if (!found)
        throw new Error(
          "Task no found. The task you are trying to search for does not exist"
        );

      const instances = new User({ name, task_id });
      const user = await instances.save();

      return user;
    },

    delete_user(_: unknown, args: UserSchema) {
      const deleted = User.findByIdAndDelete(args.id);

      if (!deleted) throw new Error("User not found");

      return deleted;
    },

    async update_user(_: unknown, args: UserSchema) {
      const updated = await User.findByIdAndUpdate(args.id, args, {
        new: true,
      });
      if (!updated) throw new Error("User not found");

      return updated;
    },
  },

  Task: {
    async users(task: TaskSchema) {
      const tasks = await User.find({ task_id: task.id });

      return tasks;
    },
  },
};
