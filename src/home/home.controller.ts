import { Request, Response, NextFunction } from 'express'

export class HomeController {
    getHome(req: Request, res: Response, next: NextFunction) {
        res.render('home')
    }
}
