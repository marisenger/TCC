import Administrador from '#models/administrador'
import Funcionario from '#models/funcionario'
import Pessoa from '#models/pessoa'
import Veterinario from '#models/veterinario'
import { Bouncer } from '@adonisjs/bouncer'

export const administrador = Bouncer.ability(async (pessoa: Pessoa, p: Pessoa) => {
  //const pessoaPesquisada = await Pessoa.findOrFail(admin.pessoa_id)
  console.log("asdadasdasdasdasdasdas")
  return p.cargo === 'adm' && pessoa.id === p.id
})

export const veterinario = Bouncer.ability((pessoa: Pessoa, funcionario: Funcionario) => {
  return pessoa.cargo === 'vet' && pessoa.id === funcionario.pessoa_id
})

export const voluntario = Bouncer.ability((pessoa: Pessoa, funcionario: Funcionario) => {
  return pessoa.cargo === 'vol' && pessoa.id === funcionario.pessoa_id
})
