import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'
import Voluntario from '#models/voluntario'

export default class VoluntariosController {
  async index({}: HttpContext) {
    const voluntario = db.from('voluntarios').select('*')

    return voluntario
  }

  async store({ params }: HttpContext) {
    let voluntario = new Voluntario()

    voluntario.funcionario_id = params.funcionario_id
    voluntario.criadoEm = DateTime.now()

    await voluntario.save()
  }

  async show({ params }: HttpContext) {
    const voluntario = await Voluntario.findOrFail(params.id)
    return voluntario
  }

  async destroy({ params }: HttpContext) {
    const voluntario = await Voluntario.findOrFail(params.id)

    voluntario.deletadoEm = DateTime.now()
    await voluntario.save()

    return voluntario
  }
}
