import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import Pessoa from './pessoa.js'
import Clinica from './clinica.js'

export default class Telefone extends BaseModel {
  @hasOne(() => Clinica)
  declare clinica: HasOne<typeof Clinica>

  @hasOne(() => Pessoa)
  declare pessoa: HasOne<typeof Pessoa>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare numeroTelefone: number

  @column()
  declare pessoa_id: number

  @column()
  declare clinica_id: number

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime
}
