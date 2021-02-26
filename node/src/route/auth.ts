import { Router, Request, Response, NextFunction } from 'express'

// Controller modules
import { getSignin, postSignin } from '../controllers/signinController'
import { getSignup, postSignup } from '../controllers/signupController'
import { homeController } from '../controllers/homeController'

// Validator modules
import { chkIsSignInValied, chkIsSignUpValied } from '../modules/chkIsValied'

const router = Router();

// redirect
router.get('/', (req: Request, res: Response): void => {
  res.redirect('signin');
})

// Auth Controller
router.get('/signin', getSignin);
router.get('/signup', getSignup);

// Home Controller
router.get('/home', homeController);

// signin
router.post('/signin', chkIsSignInValied, postSignin);

// signup
router.post('/signup', chkIsSignUpValied, postSignup)

// signout
router.get('/signout', (req: Request, res: Response):void => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
})

export default router;
