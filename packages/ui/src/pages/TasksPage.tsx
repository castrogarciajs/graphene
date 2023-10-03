import { useQuery } from '@apollo/client'
import { GET_TASKS } from '../graphql/tasks'

export default function TasksPage() {
  const { loading, error, data } = useQuery(GET_TASKS)
  console.log(data)
  return (
    <section>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <article></article>
      )}
    </section>
  )
}
