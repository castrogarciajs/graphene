import { UTIL } from "src/const";
import Database from "src/db";


let database: Database;

beforeAll(() => {
  database = new Database(UTIL.__MONGODB_URI__);
})

test("should return true", async () => {

  const connection = await database.conn()

  expect(connection).toBeDefined()
});
