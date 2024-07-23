import Doacao from '#models/doacao'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

export default class DoacoesController {
  async index() {
    const doacoes = await db.from('doacoes').select('*')

    return doacoes
  }

  async store({ request, params, response }: HttpContext) {
    const body = request.body()

    let doacao = new Doacao()
    doacao.categoria = body.categoria
    doacao.cliente_id = params.cliente_id
    doacao.voluntario_id = params.voluntario_id

    await doacao.save()

    response.status(201)

    return doacao
  }

  async show({ params }: HttpContext) {
    const doacao = await Doacao.findOrFail(params.id)

    return doacao
  }

  async update({ request, params }: HttpContext) {
    const body = request.body()
    let doacao = await Doacao.findOrFail(params.id)

    doacao.categoria = body.categoria

    doacao.save()

    return doacao
  }

  async destroy({ params }: HttpContext) {
    const doacao = await Doacao.findOrFail(params.id)

    doacao.deletadoEm = DateTime.now()
    doacao.save()

    return doacao
  }
}
