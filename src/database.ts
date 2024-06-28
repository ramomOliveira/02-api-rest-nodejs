import Knex from 'knex'

export const setupKnex = Knex({
  client: 'sqlite3',
  connection: {
    filename: './tmp/app.db',
  },
})
