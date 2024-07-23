import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import Endereco from '#models/endereco'
import { DateTime } from 'luxon'

export default class EnderecosController {
  async index({}: HttpContext) {
    const enderecos = await db.from('enderecos').select('*')

    return enderecos
  }

  async store({ request, params }: HttpContext) {
    const body = request.body()
    let endereco = new Endereco()
    endereco.cep = body.cep
    endereco.estado = body.estado
    endereco.cidade = body.cidade
    endereco.bairro = body.bairro
    endereco.rua = body.rua
    endereco.numero = body.numero
    endereco.pessoa_id = params.pessoa_id
    endereco.clinica_id = params.clinica_id
    endereco.criadoEm = DateTime.now()

    await endereco.save()

    return endereco
  }

  async show({ params }: HttpContext) {
    const endereco = await Endereco.findOrFail(params.id)

    return endereco
  }

  async update({ request, params }: HttpContext) {
    const body = request.body()
    let endereco = await Endereco.findOrFail(params.id)

    endereco.cep = body.cep
    endereco.estado = body.estado
    endereco.cidade = body.cidade
    endereco.bairro = body.bairro
    endereco.rua = body.rua
    endereco.numero = body.numero

    endereco.save()

    return endereco
  }

  async destroy({ params }: HttpContext) {
    const endereco = await Endereco.findOrFail(params.id)

    endereco.deletadoEm = DateTime.now()

    await endereco.save()

    return endereco
  }
}
