import { RequestHandler } from 'express'
import { Auth } from '../modules/auth'
import { validationResult } from 'express-validator'

export const getSignup: RequestHandler = (req, res): void => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
          res.status(400).json({ errors: errors.array() }).end();
          return;
        }
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
      } catch(err) {
        res.status(500).json({message: err.message});
      }
}

export const getSignin: RequestHandler = (req, res, next): void => {

}

export const postSignup: RequestHandler = (req, res, next): void => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() }).end();
        return;
        }

        const newUserAuth: {
        username: string,
        email: string,
        password: string,
        confirmPasswd: string,
        } = {
        username: req.body.newUserName,
        email: req.body.newUserEmail,
        password: req.body.newUserPasswd,
        confirmPasswd: req.body.newUserConfmPasswd,
        }

        req.session.newUserName = newUserAuth.username;
        req.session.newUserPasswd = newUserAuth.password;
        res.redirect('/home');

    } catch (err) {
        res.status(500).json({message: err});
    }
}
