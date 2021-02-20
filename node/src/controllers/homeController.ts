import { RequestHandler } from 'express'
import { Home } from '../modules/auth'

export const homeController: RequestHandler = (req, res): void => {

  const data: Home = {
        title: 'home',
        pageGuide: {
            pageRef: 'Welcom Your Page',
            pageAction: 'logout',
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