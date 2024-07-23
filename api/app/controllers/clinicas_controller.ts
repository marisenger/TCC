import type { HttpContext } from '@adonisjs/core/http'
import Clinica from '#models/clinica'
import { DateTime } from 'luxon'
import db from '@adonisjs/lucid/services/db'

export default class ClinicasController {
  async index() {
    const clinicas = await db.from('clinicas').select('*')

    return clinicas
  }

  async store({ request, response }: HttpContext) {
    const body = request.body()

    const clinica = await Clinica.create(body)

    response.status(201)

    return clinica
  }

  async show({ params }: HttpContext) {
    const clinica = await Clinica.findOrFail(params.id)

    return clinica
  }

  async update({ params, request }: HttpContext) {
    const body = request.body()
    let clinica = await Clinica.findOrFail(params.id)

    clinica.nome = body.nome
    clinica.cnpj = body.cnpj

    clinica.save()

    return clinica
  }

  async destroy({ params }: HttpContext) {
    const clinica = await Clinica.findOrFail(params.id)

    clinica.deletadoEm = DateTime.now()
    clinica.save()

    return clinica
  }
}
