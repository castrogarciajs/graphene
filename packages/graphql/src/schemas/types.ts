export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.

  type Task {
    id: ID
    title: String!
    description: String
    createdAt: String
    updatedAt: String
  }

  type User {
    id: ID
    name: String!
    task_id: ID
    createdAt: String
    updatedAt: String
  }

  type Query {
    tasks: [Task]
    users: [User]
  }

  type Mutation {
    create_task(title: String!, description: String): Task
    create_user(name: String!, task_id: ID): User
  }
`;
