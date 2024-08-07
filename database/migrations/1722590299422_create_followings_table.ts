import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'followings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('idFollower').unsigned().references('users.id').notNullable()
      table.integer('idUser').unsigned().references('users.id').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}