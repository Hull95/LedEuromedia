import { Router } from 'express'
import { ContactController } from './contact.controller'

const ctrl = new ContactController()

const router = Router()

router.get('/', ctrl.getContact)

export default router
