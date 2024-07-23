import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'
import Registro from '#models/registro'

export default class RegistrosController {
  async index({}: HttpContext) {
    const registro = await db.from('registros').select('*')

    return registro
  }

  async store({ request, params, response }: HttpContext) {
    const body = request.body()

    let registro = new Registro()
    registro.autor = body.autor
    registro.informacoes = body.informacoes
    registro.tipoRegistro = body.tipoRegistro
    registro.voluntario_id = params.voluntario_id
    registro.veterinario_id = params.veterinario_id
    registro.criadoEm = DateTime.now()
    registro.deletadoEm = DateTime.now()

    await registro.save()

    response.status(201)

    return registro
  }

  async show({ params }: HttpContext) {
    const registro = await Registro.findOrFail(params.id)

    return registro
  }

  async update({ request }: HttpContext) {
    const body = request.body()
    let registro = new Registro()

    registro.autor = body.autor
    registro.informacoes = body.informacoes
    registro.tipoRegistro = body.tipoRegistro

    await registro.save()

    return registro
  }

  async destroy({ params }: HttpContext) {
    const registro = await Registro.findOrFail(params.id)

    registro.deletadoEm = DateTime.now()
    await registro.save()

    return registro
  }
}
