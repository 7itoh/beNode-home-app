import { RequestHandler } from 'express'
import { Auth } from '../modules/auth'

export const getSignin: RequestHandler = (req, res): void => {
    const data: Auth = {
        title: 'Login',
        pageGuide: {
            reference: 'Set Your Email/Passwd',
            action: 'Click',
        },
        link: {
            href: './signup',
            text: 'Forgot Your Password?'
        }
    }
  res.render('../views/signin.ejs', data);
}

export const postSignin: RequestHandler = (req, res, next): void => {
  const userAuth: {
      name: string,
      passwd: string
    } = {
      name: req.body.userName,
      passwd: req.body.userPasswd
    };

    req.session.username = userAuth.name;
    req.session.password = userAuth.passwd;
    res.redirect('/home');
}