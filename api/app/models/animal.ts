import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Animal extends BaseModel {

  public static table = 'animais';

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare sexo: string

  @column.dateTime()
  declare dataResgate: DateTime

  @column()
  declare especie: string

  @column.dateTime()
  declare dataNascimento: DateTime

  @column()
  declare cor: string

  @column()
  declare localResgate: string

  @column()
  declare estadoSaude: string

  @column()
  declare raca: string

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime
}
