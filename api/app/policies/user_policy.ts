import { BasePolicy } from '@adonisjs/bouncer'
import Pessoa from '#models/pessoa'

export default class UserPolicy extends BasePolicy {
  public async admin(pessoa: Pessoa) {
    return pessoa.cargo === 'administrador'
  }

  public async veterinario(pessoa: Pessoa) {
    return pessoa.cargo === 'veterinario'
  }

  public async voluntario(pessoa: Pessoa) {
    return pessoa.cargo === 'voluntario'
  }

  public async cliente(pessoa: Pessoa) {
    return pessoa.cargo === 'cliente'
  }
}
