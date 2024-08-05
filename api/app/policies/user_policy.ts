import { BasePolicy } from '@adonisjs/bouncer'
import Pessoa from '#models/pessoa'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'
import Voluntario from '#models/voluntario'
import Funcionario from '#models/funcionario'

export default class UserPolicy extends BasePolicy {
  admin(pessoa: Pessoa): AuthorizerResponse {
    return true
  }

  veterinario(pessoa: Pessoa, funcionario: Funcionario): AuthorizerResponse {
    //const funcionario = await Funcionario.findOrFail(voluntario.funcionario_id)
    if (pessoa.id === funcionario.pessoa_id) return false
    else return true
  }

  voluntario(pessoa: Pessoa, funcionario: Funcionario): AuthorizerResponse {
    //const funcionario = await Funcionario.findOrFail(voluntario.funcionario_id)
    if (pessoa.id === funcionario.pessoa_id) return true
    else return false
  }

  cliente(pessoa: Pessoa): AuthorizerResponse {
    if (pessoa.cargo === 'cliente') return false
    else return true
  }
}
