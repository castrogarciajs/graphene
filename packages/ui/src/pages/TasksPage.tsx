import { useQuery } from '@apollo/client';
import { GET_TASKS } from '../graphql/tasks';

type TTask = { title: string; _id: string };

export default function TasksPage() {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (!data) return null;
  const tasks: TTask[] = data.tasks;

  return (
    <section>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <article>
          {tasks.map((task) => (
            <div key={task._id}>
              <h2>{task.title}</h2>
            </div>
          ))}
        </article>
      )}
    </section>
  );
}
