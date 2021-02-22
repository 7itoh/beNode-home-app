import { RequestHandler } from 'express'
import { Home } from '../modules/auth'

export const homeController: RequestHandler = (req, res): void => {

  const data: Home = {
        title: 'home',
        pageGuide: {
            reference: 'Welcom Your Page',
            action: 'logout',
        },
        link: {
            href: '/',
            text: 'Forgot Your Password?'
        },
        authUser: {
            name: '',
        },
    }

    data.authUser.name = !data.authUser.name ? (req.session as { newUserName: string }).newUserName : (req.session as { username: string }).username;

  res.render('../views/home.ejs', data);
}