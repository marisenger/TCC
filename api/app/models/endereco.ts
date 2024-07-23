import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import Pessoa from './pessoa.js'
import Clinica from './clinica.js'

export default class Endereco extends BaseModel {
  @hasOne(() => Pessoa)
  declare pessoa: HasOne<typeof Pessoa>

  @hasOne(() => Clinica)
  declare clinica: HasOne<typeof Clinica>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cep: number

  @column()
  declare estado: string

  @column()
  declare cidade: string

  @column()
  declare bairro: string

  @column()
  declare rua: string

  @column()
  declare numero: number

  @column()
  declare pessoa_id: number

  @column()
  declare clinica_id: number

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime
}
