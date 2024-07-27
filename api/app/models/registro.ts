import { DateTime } from 'luxon'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Voluntario from './voluntario.js'
import Veterinario from './veterinario.js'
import Animal from './animal.js'

export default class Registro extends BaseModel {
  @hasOne(() => Voluntario)
  declare voluntario: HasOne<typeof Voluntario>

  @hasOne(() => Veterinario)
  declare veterinario: HasOne<typeof Veterinario>

  @hasOne(() => Animal)
  declare animal: HasOne<typeof Animal>

  @column({ isPrimary: true })
  declare id: number

  @column.dateTime()
  declare dataRegistro: DateTime

  @column()
  declare autor: string

  @column()
  declare informacoes: string

  @column()
  declare tipoRegistro: string

  @column()
  declare voluntario_id: number

  @column()
  declare veterinario_id: number

  @column()
  declare animal_id: number

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime
}
