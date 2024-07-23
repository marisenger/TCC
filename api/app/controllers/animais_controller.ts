import Animal from '#models/animal'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class AnimaisController {
  async index() {
    const animais = await Animal.all()

    return animais
  }

  async store({ request, response }: HttpContext) {
    const body = request.body()

    const animal = await Animal.create(body)

    response.status(201)

    return animal
  }

  async show({ params }: HttpContext) {
    const animal = await Animal.findOrFail(params.id)

    return animal
  }

  async update({ params, request }: HttpContext) {
    const body = request.body()
    let animal = await Animal.findOrFail(params.id)

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

    return animal
  }

  async destroy({ params }: HttpContext) {
    const animal = await Animal.findOrFail(params.id)

    animal.deletadoEm = DateTime.now()
    animal.save()

    return animal
  }
}
