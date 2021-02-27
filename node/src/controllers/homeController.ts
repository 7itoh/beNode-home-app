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

    const newUserName: string = req.session.newUserName!;
    const userName: string = req.session.username!;

    data.authUser.name = !data.authUser.name ? newUserName : userName ;

  res.render('../views/home.ejs', data);
}