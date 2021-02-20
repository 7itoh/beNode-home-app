import { RequestHandler } from 'express'
import { Auth } from '../modules/auth'

export const signupController: RequestHandler = (req, res): void => {
    const data:Auth = {
        title: 'Authentication',
        pageGuide: {
            pageRef: 'Set SignUp Your Data',
            pageAction: 'Register'
        },
        link: {
            href: './signin',
            text: 'Retrun Login page'
        }
    }
    res.render('../views/signup.ejs', data);
}