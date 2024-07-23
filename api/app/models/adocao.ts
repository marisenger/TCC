import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import Animal from './animal.js'
import Cliente from './cliente.js'
import Registro from './registro.js'

export default class Adocao extends BaseModel {
  @hasOne(() => Cliente)
  declare cliente: HasOne<typeof Cliente>

  @hasOne(() => Registro)
  declare registro: HasOne<typeof Registro>

  @hasOne(() => Animal)
  declare animal: HasOne<typeof Animal>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare animal_id: number

  @column()
  declare cliente_id: number

  @column()
  declare registro_id: number

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime
}
