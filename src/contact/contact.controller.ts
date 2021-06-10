import { Request, Response, NextFunction } from 'express'

export class ContactController {
    getContact(req: Request, res: Response, next: NextFunction) {
        res.render('contact', {
            faq: [
                { q: 'Pitanje 1', a: 'Odgovor 1' },
                { q: 'Pitanje 2', a: 'Odgovor 2' },
                { q: 'Pitanje 3', a: 'Odgovor 3' },
                { q: 'Pitanje 4', a: 'Odgovor 4' },
                { q: 'Pitanje 5', a: 'Odgovor 5' }
            ]
        })
    }
}
