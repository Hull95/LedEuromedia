import { Router } from 'express'
import { LocationController } from './location.controller'

const ctrl = new LocationController()

const router = Router()

router.get('/', ctrl.getLocation)

export default router
