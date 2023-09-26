export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.

  type Task {
    _id: ID
    title: String!
    description: String
    user: User
    createdAt: String
    updatedAt: String
  }

  type User {
    _id: ID
    name: String!
    tasks: [Task]
    createdAt: String
    updatedAt: String
  }

  type Query {
    tasks: [Task]
    users: [User]
    task(_id: ID!): Task
    user(_id: ID!): User
  }

  type Mutation {
    create_task(title: String!, user_id: ID!): Task
    delete_task(_id: ID!): Task
    update_task(_id: ID! title: String! description: String): Task

    create_user(name: String!, task_id: ID): User
    delete_user(_id: ID!): User
    update_user(_id: ID! name: String! task_id: ID!): User
  }
`;
