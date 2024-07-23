import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Doacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare categoria: string

  @column()
  declare cliente_id: number

  @column()
  declare voluntario_id: number

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime
}
