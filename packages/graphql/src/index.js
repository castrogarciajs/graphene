import run from "./app.js";
import { conn } from "./db.js";
import { typeDefs } from "./schemas/types.js";
import { resolvers } from "./schemas/resolvers.js";

conn();
run(typeDefs, resolvers);
