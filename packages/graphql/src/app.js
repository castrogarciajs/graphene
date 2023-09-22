import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "node:http";

export default async function run(typeDefs, resolvers) {
  const app = express();

  const server = http.createServer(app);
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apollo.start();
  app.use("/graphql", cors(), express.json(), expressMiddleware(apollo));

  await new Promise((resolve) => server.listen({ port: 4000 }, resolve));

  console.log("Server on port: http://localhost:4000");
}
