import { Router, Request, Response } from 'express'

import { validationResult } from 'express-validator'
import { chkIsSignInValied, chkIsSignUpValied } from '../modules/chkIsValied'

import { signinController } from '../controllers/signinController'
import { signupController } from '../controllers/signupController'
import { homeController } from '../controllers/homeController'

const router = Router();

// redirect
router.get('/', (req: Request, res: Response): void => {
  res.redirect('signin');
})

// Auth Controller
router.get('/signin', signinController);
router.get('/signup', signupController);

// Home Controller
router.get('/home', homeController);

// signin
router.post('/signin', chkIsSignInValied, (req: Request, res: Response): void => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() }).end();
      return;
    }

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

    res.status(200).end();

  } catch (err) { 
    res.status(500).json({message: err.message});
  }
})

// signup
router.post('/signup', chkIsSignUpValied, ( req: Request, res: Response ):void => {
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
})

// signout
router.get('/signout', (req: Request, res: Response):void => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
})

export default router;
