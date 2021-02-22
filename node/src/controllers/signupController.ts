import { RequestHandler } from 'express'
import { Auth } from '../modules/auth'

export const signupController: RequestHandler = (req, res): void => {
    const data:Auth = {
        title: 'Authentication',
        pageGuide: {
            reference: 'Set SignUp Your Data',
            action: 'Register'
        },
        link: {
            href: './signin',
            text: 'Retrun Login page'
        }
    }
    res.render('../views/signup.ejs', data);
}