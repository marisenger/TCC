import type { HttpContext } from '@adonisjs/core/http'
import Pessoa from '#models/pessoa'
import { DateTime } from 'luxon'
/* TODO
  Organizar o select{
    não deve aparecer os deletados
  }
  Arrumar os erros da atualização
*/

export default class PessoasController {
  async index() {
    const pessoas = await Pessoa.all()

    return pessoas
  }

  async store({ request }: HttpContext) {
    const body = request.body()
    let pessoa = new Pessoa()
    pessoa.nome = body.nome
    pessoa.cpf = body.cpf
    pessoa.rg = body.rg
    pessoa.email = body.email
    pessoa.senha = body.senha
    pessoa.data_nascimento = body.dataNascimento
    pessoa.sexo = body.sexo
    pessoa.criadoEm = DateTime.now()

    await pessoa.save()

    return pessoa
  }

  async show({ params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)

    return pessoa
  }

  async update({ params, request }: HttpContext) {
    const body = request.body()
    const pessoa = await Pessoa.findOrFail(params.id)
    
    pessoa.nome = body.nome
    pessoa.cpf = body.cpf
    pessoa.rg = body.rg
    pessoa.email = body.email
    pessoa.senha = body.senha
    pessoa.data_nascimento = body.dataNascimento
    pessoa.sexo = body.sexo

    await pessoa.save()
    return pessoa
  }

  async login({request}: HttpContext){
    const body = request.body()

    const id = body.id
    const pessoa =  await Pessoa.findOrFail(id)
    console.log(pessoa)
    const token = await Pessoa.accessTokens.create(pessoa)

    return token
  }

  async destroy({ params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)
    pessoa.deletadoEm = DateTime.now()
    pessoa.save()
    return pessoa
  }
}
