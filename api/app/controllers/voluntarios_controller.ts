import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'
import Voluntario from '#models/voluntario'
import Animal from '#models/animal'
import Registro from '#models/registro'

export default class VoluntariosController {
  async index({}: HttpContext) {
    const voluntario = db.from('voluntarios').select('*')

    return voluntario
  }

  
  async AdicionaAnimal({ request }: HttpContext) {
    const body = request.body()

    let animal = new Animal()

    animal.nome = body.nome
    animal.sexo = body.sexo
    animal.dataResgate = body.dataResgate
    animal.especie = body.especie
    animal.dataNascimento = body.dataNascimento
    animal.cor = body.cor
    animal.localResgate = body.localResgate
    animal.estadoSaude = body.estadoSaude
    animal.raca = body.raca

    await animal.save()
  }

  async AdicionaRegistro({ request, params }: HttpContext) {
    const body = request.body()

    let registro = new Registro()

    registro.autor = body.autor
    registro.informacoes = body.informacoes
    registro.tipoRegistro = body.tipoRegistro
    registro.dataRegistro = DateTime.now()
    registro.voluntario_id = params.voluntario_id
    registro.veterinario_id = params.veterinario_id
    registro.animal_id = body.animal_id
    registro.criadoEm = DateTime.now()

    await registro.save()
  }

  async AlteraAnimal({ request, params }: HttpContext) {
    const body = request.body()

    let animal = await Animal.findOrFail(params.animal_id)

    animal.nome = body.nome
    animal.sexo = body.sexo
    animal.dataResgate = body.dataResgate
    animal.especie = body.especie
    animal.dataNascimento = body.dataNascimento
    animal.cor = body.cor
    animal.localResgate = body.localResgate
    animal.estadoSaude = body.estadoSaude
    animal.raca = body.raca

    await animal.save()
  }
  /*

  async store({ params }: HttpContext) {
    let voluntario = new Voluntario()

    voluntario.funcionario_id = params.funcionario_id
    voluntario.criadoEm = DateTime.now()

    await voluntario.save()
  }
    
  async show({ params }: HttpContext) {
    const voluntario = await Voluntario.findOrFail(params.id)
    return voluntario
  }

  async destroy({ params }: HttpContext) {
    const voluntario = await Voluntario.findOrFail(params.id)

    voluntario.deletadoEm = DateTime.now()
    await voluntario.save()

    return voluntario
  }
  */
}
