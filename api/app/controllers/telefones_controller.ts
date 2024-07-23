import Telefone from '#models/telefone'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

export default class TelefonesController {
  async index() {
    const telefone = await db.from('telefones').select('*')

    return telefone
  }

  async store({ request, params, response }: HttpContext) {
    const body = request.body()

    let telefone = new Telefone()
    telefone.numeroTelefone = body.numeroTelefone
    telefone.clinica_id = params.clinica_id
    telefone.pessoa_id = params.pessoa_id
    telefone.criadoEm = DateTime.now()
    telefone.deletadoEm = DateTime.now()

    await telefone.save()

    response.status(201)

    return {
      message: 'Telefone cadastrada com sucesso',
      telefone,
    }
  }

  async show({ params }: HttpContext) {
    const telefone = await Telefone.findOrFail(params.id)

    return telefone
  }

  async update({ request, params }: HttpContext) {
    const body = request.body()
    let telefone = await Telefone.findOrFail(params.id)

    telefone.numeroTelefone = body.numeroTelefone
    await telefone.save()
  }

  async destroy({ params }: HttpContext) {
    const telefone = await Telefone.findOrFail(params.id)

    telefone.deletadoEm = DateTime.now()
    telefone.save()
  }
}
