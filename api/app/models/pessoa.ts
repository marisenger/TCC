import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Telefone from './telefone.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Endereco from './endereco.js'

export default class Pessoa extends BaseModel {
  @hasMany(() => Telefone)
  declare telefones: HasMany<typeof Telefone>

  @hasMany(() => Endereco)
  declare enderecos: HasMany<typeof Endereco>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cpf: string

  @column()
  declare rg: string

  @column()
  declare email: string

  @column()
  declare senha: string

  @column.dateTime()
  declare data_nascimento: DateTime

  @column()
  declare sexo: string

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime
}
