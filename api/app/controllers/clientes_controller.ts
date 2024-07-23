import Cliente from '#models/cliente'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

export default class ClientesController {
  async index() {
    const clientes = await db.from('clientes').select('*')

    return clientes
  }

  async store({ params, response }: HttpContext) {
    let cliente = new Cliente()
    cliente.pessoa_id = params.pessoa_id
    cliente.clinica_id = params.clinica_id

    await cliente.save()

    response.status(201)

    return cliente
  }

  async show({ params }: HttpContext) {
    const cliente = await Cliente.findOrFail(params.id)

    return cliente
  }

  async destroy({ params }: HttpContext) {
    const cliente = await Cliente.findOrFail(params.id)

    cliente.deletadoEm = DateTime.now()
    cliente.save()

    return cliente
  }
}
