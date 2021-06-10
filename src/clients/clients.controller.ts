import { Request, Response, NextFunction } from 'express'
import clients from './clients.json'

export class ClientsController {
    getClients(req: Request, res: Response, next: NextFunction) {
        res.render('clients', { clients })
    }
}
