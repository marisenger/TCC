import { BaseSchema } from '@adonisjs/lucid/schema'
export default class extends BaseSchema {
  protected tableName = 'registros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('autor')
      table.string('informacoes')
      table.string('tipo_registro')
      table.dateTime('data_registro')
      table.integer('voluntario_id').unsigned().references('voluntarios.id').onDelete('CASCADE')
      table.integer('veterinario_id').unsigned().references('veterinarios.id').onDelete('CASCADE')
      table.integer('animal_id').unsigned().references('animais.id').onDelete('CASCADE')
      table.timestamp('criado_em')
      table.timestamp('deletado_em')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
