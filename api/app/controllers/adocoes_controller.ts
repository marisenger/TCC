import Adocao from '#models/adocao'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

export default class AdocoesController {
  async index() {
    const adocoes = await db.from('adocoes').select('*')

    return adocoes
  }

  async store({ params, response }: HttpContext) {
    let adocao = new Adocao()
    adocao.cliente_id = params.cliente_id
    adocao.registro_id = params.registro_id
    adocao.animal_id = params.animal_id

    await adocao.save()

    response.status(201)

    return adocao
  }

  async show({ params }: HttpContext) {
    const adocao = await Adocao.findOrFail(params.id)

    return adocao
  }

  async destroy({ params }: HttpContext) {
    const adocao = await Adocao.findOrFail(params.id)

    adocao.deletadoEm = DateTime.now()
    adocao.save()

    return adocao
  }
}
