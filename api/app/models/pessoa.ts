import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Telefone from './telefone.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Endereco from './endereco.js'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

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

  @column()
  declare cargo: string
  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime

  static accessTokens = DbAccessTokensProvider.forModel(Pessoa, {
    expiresIn: '30 days',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
    tokenSecretLength: 40,
  })

  static VerificaAdmin(pessoa: Pessoa){
    if(pessoa.cargo == 'adm')
      return true
    return false 

  }

  static VerificaFuncionario(pessoa: Pessoa){
    if(pessoa.cargo == "vet" || pessoa.cargo == "vol") 
      return true
    return false
  }
}
