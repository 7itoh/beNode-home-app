import { Router, Request, Response } from 'express'

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
router.post('/signin', (req: Request, res: Response):void => {
  try {
    const userAuth: {
      name: string,
      passwd: string
    } = {
      name : (req.body as { userName: string }).userName,
      passwd : (req.body as { userPasswd: string }).userPasswd
    }
    if ( userAuth.name ===  req.session.newUserName && userAuth.passwd === req.session.newUserPasswd ) {
        (req.session as { username: string }).username  = userAuth.name;
        (req.session as { password: string }).password  = userAuth.passwd;
        res.redirect('/home');
      } else {
        res.redirect('/signin');
      }
  } catch (err) {
    res.status(500).json({message: err});
  }
});

// signup
router.post('/signup', ( req: Request, res: Response ):void => {
  try {
    if(req.body.newUserName && req.body.newUserEmail && req.body.newUserPasswd && req.body.newUserConfmPasswd){
      const newUserAuth: {
        username: string,
        email: string,
        password: string,
        confirmPasswd: string,
      } = {
        username: (req.body as { newUserName: string}).newUserName,
        email: (req.body as { newUserEmail: string }).newUserEmail,
        password: (req.body as { newUserPasswd: string }).newUserPasswd,
        confirmPasswd: (req.body as { newUserConfmPasswd: string }).newUserConfmPasswd,
      }
      if( newUserAuth.password === newUserAuth.confirmPasswd && newUserAuth.password.length >= 7 ){
        (req.session as { newUserName: string }).newUserName = newUserAuth.username;
        (req.session as { newUserEmail: string }).newUserEmail = newUserAuth.email;
        (req.session as { newUserPasswd: string }).newUserPasswd = newUserAuth.password;
        res.redirect('/home');
      } else {
        const msg = newUserAuth.password.length < 7 ? 'パスワードは7文字以上で入力してください' : 'パスワードが一致しません';
        res.status(401).json({message: msg})
        res.redirect('/signup');
      }
    } else {
      res.status(401).json({message: '入力に空欄があります'})
      res.redirect('/signup');
    }
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
