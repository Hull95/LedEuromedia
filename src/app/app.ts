import { join } from 'path'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'

import homeRouter from '../home/home.router'
import contactRouter from '../contact/contact.router'
import clientsRouter from '../clients/clients.router'

export function createApp() {
    const app = express()

    app.use(cors())
    app.use(helmet({ contentSecurityPolicy: false }))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use('/', express.static(join(__dirname, '..', '..', 'static')))

    // View engine
    app.set('view engine', 'ejs')
    app.set('views', join(__dirname, '..', 'views'))

    app.use('/', homeRouter)
    app.use('/kontakt', contactRouter)
    app.use('/nasi-klijenti', clientsRouter)

    return app
}
