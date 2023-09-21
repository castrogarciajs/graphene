import start from "./src/app.js";
import { typeDefs } from "./src/schemas/types.js";
import { resolvers } from "./src/schemas/resolvers.js";

start(typeDefs, resolvers);
