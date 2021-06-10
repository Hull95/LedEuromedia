import { Router } from 'express'
import { ClientsController } from './clients.controller'

const ctrl = new ClientsController()

const router = Router()

router.get('/', ctrl.getClients)

export default router
