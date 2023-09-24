import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "node:http";
import { typeDefs } from "./schemas/types";
import { resolvers } from "./schemas/resolvers";

export default class Application {
  private app: express.Express;
  private server: http.Server;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
  }

  /**execute core application */
  async run() {
    const apollo = new ApolloServer({
      typeDefs,
      resolvers,
    });
    
    await apollo.start();

    this.app.use("/graphql", cors(), express.json(), expressMiddleware(apollo));

    await new Promise<void>((resolve) =>
      this.server.listen({ port: 4000 }, resolve)
    );

    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  }
}
