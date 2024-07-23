import Administrador from '#models/administrador'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

export default class AdministradoresController {
  async index() {
    const administradores = await db.from('administradores').select('*')

    return administradores
  }

  async store({ params, response }: HttpContext) {
    let administrador = new Administrador()
    administrador.pessoa_id = params.pessoa_id
    administrador.clinica_id = params.clinica_id
    administrador.criadoEm = DateTime.now()

    await administrador.save()

    response.status(201)

    return administrador
  }

  async show({ params }: HttpContext) {
    const administrador = await Administrador.findOrFail(params.id)

    return administrador
  }

  async destroy({ params }: HttpContext) {
    const administrador = await Administrador.findOrFail(params.id)

    administrador.deletadoEm = DateTime.now()
    administrador.save()

    return administrador
  }
}
