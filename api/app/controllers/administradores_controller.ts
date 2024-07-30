import Funcionario from '#models/funcionario'
import user_policy from '#policies/user_policy'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'
import Administrador from '#models/administrador'

export default class AdministradoresController {
  async index() {
    const administradores = await db.from('administradores').select('*')

    return administradores
  }

  async show({ params }: HttpContext) {
    const administrador = await Administrador.findOrFail(params.id)
    return administrador
  }

  async AlteraSalario({ request }: HttpContext) {
    const body = request.body()

    const funcionario = (await Funcionario.query().where('id', body.funcionario_id))[0]
    const salarioNovo = body.salarioNovo

    funcionario.salario = salarioNovo

    funcionario.save()
  }

  async Demitir({ request }: HttpContext) {
    const body = request.body()

    const funcionario = (await Funcionario.query().where('id', body.funcionario_id))[0]

    funcionario.deletadoEm = DateTime.now()

    funcionario.save()
  }

  /*
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
    const nome = db.rawQuery('SELECT p.nome FROM administradores a INNER JOIN pessoas p ON a.pessoa_id = p.id; ')
    console.log(nome)
    return {
      "administrar": administrador,
      "nome": ""
    }
  }

  async destroy({ params }: HttpContext) {
    const administrador = await Administrador.findOrFail(params.id)

    administrador.deletadoEm = DateTime.now()
    administrador.save()

    return administrador
  }
  */
}
