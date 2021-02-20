import { RequestHandler } from 'express'
import { Auth } from '../modules/auth'

export const signinController: RequestHandler = (req, res): void => {
    const data: Auth = {
        title: 'Login',
        pageGuide: {
            pageRef: 'Set Your Email/Passwd',
            pageAction: 'Click',
        },
        link: {
            href: './signup',
            text: 'Forgot Your Password?'
        }
    }
  res.render('../views/signin.ejs', data);
}