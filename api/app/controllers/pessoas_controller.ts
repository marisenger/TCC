import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'
import Pessoa from '#models/pessoa'
import Voluntario from '#models/voluntario'
import Cliente from '#models/cliente'
import Veterinario from '#models/veterinario'
import Administrador from '#models/administrador'
import Funcionario from '#models/funcionario'
import user_policy from '#policies/user_policy'

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

  async create({ bouncer, request, response }: HttpContext) {
    const body = request.body()

    const voluntario = await Voluntario.findOrFail(body.id)
    const funcionario = await Funcionario.findOrFail(voluntario.funcionario_id)

    if (await bouncer.with(user_policy).denies('voluntario', funcionario)) {
      return response.forbidden('Cannot create a post')
    }

    //Continue with the controller logic
    const pessoas = await Pessoa.all()

    return pessoas
  }

  async criar({ request, params }: HttpContext) {
    const body = request.body()
    let pessoa = new Pessoa()
    pessoa.nome = body.nome
    pessoa.cpf = body.cpf
    pessoa.rg = body.rg
    pessoa.email = body.email
    pessoa.senha = body.senha
    pessoa.data_nascimento = body.dataNascimento
    pessoa.sexo = body.sexo
    pessoa.cargo = params.perfil
    pessoa.criadoEm = DateTime.now()
    if(params.perfil === 'adm'){

    }
    const body = request.body()
    let pessoa = new Pessoa()
    pessoa.nome = body.nome
    pessoa.cpf = body.cpf
    pessoa.rg = body.rg
    pessoa.email = body.email
    pessoa.senha = body.senha
    pessoa.data_nascimento = body.dataNascimento
    pessoa.sexo = body.sexo
    pessoa.cargo = params.perfil
    pessoa.criadoEm = DateTime.now()

    await pessoa.save()

    let voluntario = new Voluntario()
    let cliente = new Cliente()
    let veterinario = new Veterinario()
    let administrador = new Administrador()
    let funcionario = new Funcionario()

    switch (params.perfil) {
      case 'adm':
        administrador.pessoa_id = pessoa.id
        administrador.clinica_id = body.clinica_id
        administrador.criadoEm = DateTime.now()

        await administrador.save()

        break
      case 'func':
        funcionario.pessoa_id = pessoa.id
        funcionario.clinica_id = body.clinica_id
        funcionario.administrador_id = body.administrador_id
        funcionario.salario = body.salario
        funcionario.criadoEm = DateTime.now()

        await funcionario.save()

        break
      case 'vet':
        veterinario.funcionario_id = body.funcionario_id
        veterinario.crmv = body.crmv
        veterinario.criadoEm = DateTime.now()

        await veterinario.save()

        break
      case 'vol':
        voluntario.funcionario_id = body.funcionario_id
        voluntario.criadoEm = DateTime.now()

        await voluntario.save()

        break
      case 'cli':
        cliente.pessoa_id = pessoa.id
        cliente.clinica_id = body.clinica_id
        cliente.criadoEm = DateTime.now()

        await cliente.save()

        break
    }
  }

  async show({ params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)

    return pessoa
  }

  async atualizar({ request }: HttpContext) {
    const body = request.body()
    const pessoa = await Pessoa.findOrFail(body.id)
    console.log(pessoa)
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

  async login({ request }: HttpContext) {
    const body = request.body()

    const id = body.id
    const pessoa = await Pessoa.findOrFail(id)
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
