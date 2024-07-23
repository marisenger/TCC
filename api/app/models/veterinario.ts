import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import Funcionario from './funcionario.js'

export default class Veterinario extends BaseModel {
  @hasOne(() => Funcionario)
  declare funcionario: HasOne<typeof Funcionario>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare crmv: string

  @column()
  declare funcionario_id: number

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime
}
