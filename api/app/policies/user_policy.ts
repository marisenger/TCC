import { BasePolicy } from '@adonisjs/bouncer'
import Pessoa from '#models/pessoa'

export default class UserPolicy extends BasePolicy {
  async admin(pessoa: Pessoa) {
    return pessoa.cargo === 'adm'
  }

  async veterinario(pessoa: Pessoa) {
    return pessoa.cargo === 'veterinario'
  }

  async voluntario(pessoa: Pessoa) {
    return pessoa.cargo === 'voluntario'
  }

  async cliente(pessoa: Pessoa) {
    return pessoa.cargo === 'cliente'
  }
}
