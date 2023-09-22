import run from "./src/app.js";
import { conn } from "./src/db.js";
import { typeDefs } from "./src/schemas/types.js";
import { resolvers } from "./src/schemas/resolvers.js";

conn();
run(typeDefs, resolvers);
