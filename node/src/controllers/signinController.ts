import { RequestHandler } from 'express'
import { Auth } from '../modules/auth'

export const signinController: RequestHandler = (req, res): void => {
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

export const signinPostController: RequestHandler = (req, res): void => {
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