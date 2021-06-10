import { Router } from 'express'
import { HomeController } from './home.controller'

const ctrl = new HomeController()

const router = Router()

router.get('/', ctrl.getHome)

export default router
