import Task from '../collections/task';
import User from '../collections/user';

type TaskSchema = {
  _id: string | number;
  title: string;
  user_id: string | number;
};
type UserSchema = {
  _id: string | number;
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

    /**Found by _id */

    async task(_: unknown, args: TaskSchema) {
      const task = await Task.findById(args._id);

      return task;
    },

    async user(_: unknown, args: UserSchema) {
      const user = await User.findById(args._id);

      return user;
    },
  },

  Mutation: {
    /**------------------------ TASK ---------------------- */
    async create_task(_: unknown, args: TaskSchema) {
      const { title, user_id } = args;

      const instances = new Task({ title, user_id });
      const task = await instances.save();

      return task;
    },

    async delete_task(_: unknown, args: TaskSchema) {
      const deleted = await Task.findByIdAndDelete(args._id);

      if (!deleted) throw new Error('Task not found');

      return deleted;
    },

    async update_task(_: unknown, args: TaskSchema) {
      const updated = await Task.findByIdAndUpdate(args._id, args, {
        new: true,
      });

      if (!updated) throw new Error('Task not found');

      return updated;
    },

    /**----------------------- USER ------------------- */
    async create_user(_: unknown, args: UserSchema) {
      const { name, task_id } = args;
      const found = await Task.findById(task_id);

      if (!found)
        throw new Error(
          'Task no found. The task you are trying to search for does not exist',
        );

      const instances = new User({ name, task_id });
      const user = await instances.save();

      return user;
    },

    async delete_user(_: unknown, args: UserSchema) {
      const deleted = await User.findByIdAndDelete(args._id);

      if (!deleted) throw new Error('User not found');

      console.log(deleted);
      return deleted;
    },

    async update_user(_: unknown, args: UserSchema) {
      const updated = await User.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updated) throw new Error('User not found');

      return updated;
    },
  },

  User: {
    async tasks(root: UserSchema) {
      const tasks = Task.find({ user_id: root._id });

      return tasks;
    },
  },

  Task: {
    async user(root: UserSchema) {
      const user = await User.findById(root._id);

      return user;
    },
  },
};
