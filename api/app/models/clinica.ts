import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Clinica extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cnpj: string

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime
}
