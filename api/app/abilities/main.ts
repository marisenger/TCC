import Administrador from '#models/administrador'
import Funcionario from '#models/funcionario'
import Pessoa from '#models/pessoa'
import Veterinario from '#models/veterinario'
import { Bouncer } from '@adonisjs/bouncer'

export const administrador = Bouncer.ability((pessoa: Pessoa, admin: Administrador) => {
  const pessoaPesquisada = Pessoa.findOrFail(admin.pessoa_id)
  return pessoa.cargo === pessoaPesquisada.cargo && pessoa.id === admin.pessoa_id
})

export const veterinario = Bouncer.ability((pessoa: Pessoa, funcionario: Funcionario) => {
  return pessoa.cargo === 'vet' && pessoa.id === funcionario.pessoa_id
})

export const voluntario = Bouncer.ability((pessoa: Pessoa, funcionario: Funcionario) => {
  return pessoa.cargo === 'vol' && pessoa.id === funcionario.pessoa_id
})
