import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "node:http";

async function start() {
  const app = express();

  const server = http.createServer(app);
  const apollo = new ApolloServer({
    typeDefs: "",
    resolvers: () => {},
  });

  await apollo.start();
  app.use("/graphql", cors(), express.json(), expressMiddleware(apollo));

  new Promise((_resolve) =>
    server.listen({
      port: 4000,
    })
  );

  console.log("Server on port 3000: https://localhost:3000");
}

export default start;
