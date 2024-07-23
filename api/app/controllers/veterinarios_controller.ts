import Veterinario from '#models/veterinario'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

export default class VeterinariosController {
  async index({}: HttpContext) {
    const veterinario = db.from('veterinarios').select('*')
    return veterinario
  }

  async store({ request, params }: HttpContext) {
    const body = request.body()

    let veterinario = new Veterinario()

    veterinario.crmv = body.crmv
    veterinario.funcionario_id = params.funcionario_id
    veterinario.criadoEm = DateTime.now()

    await veterinario.save()
  }

  async show({ params }: HttpContext) {
    const veterinario = await Veterinario.findOrFail(params.id)
    return veterinario
  }

  async update({ request, params }: HttpContext) {
    const body = request.body()
    let veterinario = await Veterinario.findOrFail(params.id)

    veterinario.crmv = body.crmv

    await veterinario.save()
  }

  async destroy({ params }: HttpContext) {
    const veterinario = await Veterinario.findOrFail(params.id)

    veterinario.deletadoEm = DateTime.now()
    await veterinario.save()

    return veterinario
  }
}
