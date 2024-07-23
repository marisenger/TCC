import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'telefones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('numero_telefone')
      table.integer('pessoa_id').unsigned().references('pessoas.id').onDelete('CASCADE')
      table.integer('clinica_id').unsigned().references('clinicas.id').onDelete('CASCADE')
      table.timestamp('criado_em')
      table.timestamp('deletado_em')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
