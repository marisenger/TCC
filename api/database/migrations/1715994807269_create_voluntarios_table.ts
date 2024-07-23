import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'voluntarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('funcionario_id').unsigned().references('funcionarios.id').onDelete('CASCADE')
      table.timestamp('criado_em')
      table.timestamp('deletado_em')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
