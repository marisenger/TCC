import { Bouncer } from '@adonisjs/bouncer'
import UserPolicy from '../app/policies/user_policy.js'

export const { actions, policies } = Bouncer
  .define('admin', UserPolicy.admin)
  .define('veterinario', UserPolicy.veterinario)
  .define('voluntario', UserPolicy.voluntario)
  .define('cliente', UserPolicy.cliente)
