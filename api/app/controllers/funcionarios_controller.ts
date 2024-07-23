import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'
import Funcionario from '#models/funcionario'

export default class FuncinariosController {
  async index({}: HttpContext) {
    const funcionarios = await db.from('funcionarios').select('*')

    return funcionarios
  }

  async store({ request, params, response }: HttpContext) {
    const body = request.body()

    let funcionario = new Funcionario()
    funcionario.salario = body.salario
    funcionario.pessoa_id = params.pessoa_id
    funcionario.clinica_id = params.clinica_id
    funcionario.administrador_id = params.administrador_id
    funcionario.criadoEm = DateTime.now()

    await funcionario.save()

    response.status(201)

    return funcionario
  }

  async show({ params }: HttpContext) {
    const funcionario = await Funcionario.findOrFail(params.id)

    return funcionario
  }

  async update({ request, params }: HttpContext) {
    const body = request.body()
    let funcionario = await Funcionario.findOrFail(params.id)

    funcionario.salario = body.salario

    funcionario.save()

    return funcionario
  }

  async destroy({ params }: HttpContext) {
    const funcionario = await Funcionario.findOrFail(params.id)

    funcionario.deletadoEm = DateTime.now()
    funcionario.save()

    return funcionario
  }
}
