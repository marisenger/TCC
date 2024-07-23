/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const VeterinarioController = () => import('#controllers/veterinarios_controller')
const VoluntarioController = () => import('#controllers/voluntarios_controller')
const TelefonesController = () => import('#controllers/telefones_controller')
const RegistroController = () => import('#controllers/registros_controller')
const PessoasController = () => import('#controllers/pessoas_controller')
const EnderecosController = () => import('#controllers/enderecos_controller')
const DoacoesController = () => import('#controllers/doacoes_controller')
const ClinicasController = () => import('#controllers/clinicas_controller')
const ClientesController = () => import('#controllers/clientes_controller')
const AnimaisController = () => import('#controllers/animais_controller')
const AdocoesController = () => import('#controllers/adocoes_controller')
const FuncionariosController = () => import('#controllers/funcionarios_controller')
const AdministradoresController = () => import('#controllers/administradores_controller')

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

//ROTAS DO ADMINISTRADOR
router.resource('/administradores', AdministradoresController).apiOnly()
router.post('/administradores/:pessoa_id/:clinica_id/teste', [AdministradoresController, 'store'])

//ROTAS DA ADOÇÂO
router.resource('/adocoes', AdocoesController).apiOnly()
router.post('/adocoes/:cliente_id/:registro_id/:animal_id/teste', [AdocoesController, 'store'])

//ROTA DO ANIMAL
router.resource('/animais', AnimaisController).apiOnly()

//ROTAS DO CLIENTE
router.resource('/clientes', ClientesController).apiOnly()
router.post('/clientes/:pessoa_id/:clinica_id/teste', [ClientesController, 'store'])

//ROTA DA CLINICA
router.resource('/clinicas', ClinicasController).apiOnly()

//ROTAs DA DOAÇÂO
router.resource('/doacoes', DoacoesController).apiOnly()
router.post('/doacoes/:cliente_id/:voluntario_id/teste', [DoacoesController, 'store'])

//ROTAs DO ENDEREÇOS
router.resource('/enderecos', EnderecosController).apiOnly()
router.post('/enderecos/:clinica_id/:pessoa_id/teste', [EnderecosController, 'store'])

//ROTAS DO FUNCIONARIO
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.post('funcionarios/:pessoa_id/:clinica_id/:administrador_id', [FuncionariosController, 'store',])

//ROTA DA PESSOA
router.resource('/pessoas', PessoasController).apiOnly()

//ROTAS DO REGISTRO
router.resource('/registros', RegistroController).apiOnly()
router.post('registros/:voluntario_id/:veterinario_id', [RegistroController, 'store'])

//ROTAS DO TELEFONE
router.resource('/telefones', TelefonesController).apiOnly()
router.post('/telefones/:clinica_id/:pessoa_id/teste', [TelefonesController, 'store'])

//ROTA DO VETERINARIO
router.resource('/veterinarios', VeterinarioController).apiOnly()
router.post('/veterinarios/:funcionario_id', [VeterinarioController, 'store'])

//ROTA DO VOLUNTARIO
router.resource('/voluntarios', VoluntarioController).apiOnly()
router.post('/voluntarios/:funcionario_id', [VoluntarioController, 'store'])









