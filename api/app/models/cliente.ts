import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import Clinica from './clinica.js'
import Pessoa from './pessoa.js'

export default class Cliente extends BaseModel {
  @hasOne(() => Pessoa)
  declare pessoa: HasOne<typeof Pessoa>

  @hasOne(() => Clinica)
  declare clinica: HasOne<typeof Clinica>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare pessoa_id: number

  @column()
  declare clinica_id: number

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime
}
