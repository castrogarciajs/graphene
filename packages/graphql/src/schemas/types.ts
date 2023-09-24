export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.

  type Task {
    id: ID
    name: String!
    description: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    tasks: [Task]
  }

  type Mutation {
    create(name: String!, description: String): Task
  }
`;
