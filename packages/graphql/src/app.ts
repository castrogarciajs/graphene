import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "node:http";
import { typeDefs } from "./schemas/types";
import { resolvers } from "./schemas/resolvers";

export default async function run() {
  const app = express();

  const server = http.createServer(app);
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apollo.start();
  app.use("/", cors(), express.json(), expressMiddleware(apollo));

  await new Promise<void>((resolve) => server.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000/`);
}
