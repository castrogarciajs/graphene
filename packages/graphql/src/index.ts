import Application from './app'
import Database from './db'
import { UTIL } from './const'

const app = new Application()
const db = new Database(UTIL.__MONGODB_URI__)

db.conn()
app.run()
