import mongoose from 'mongoose'
import process from 'node:process'

export default class Database {
  /**URL of the database */
  constructor(private db: string) {}

  /**execute connection to mongodb */
  async conn() {
    try {
      const database = await mongoose.connect(this.db)

      console.log(`🚀 Connection ready at ${database.connection.name}`)

      return database
    } catch (error) {
      if (error instanceof Error) {
        console.error('❌ Error connection: ', error.message)
      }
      process.exit(1)
    }
  }
}
