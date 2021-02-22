import { check } from 'express-validator'

export const chkIsSignInValied = [
    check('userName', 'userPasswd').custom(( _, { req }) => { 
        if (req.body.userPasswd !== req.session.newUserPasswd || req.body.userName !== req.session.newUserName) {
            throw new Error('ユーザー名、もしくは、パスワードが一致していません')
        } else { 
            return true;
        }
    }),
]

export const chkIsSignUpValied = [
    check('newUserName').isAlphanumeric().withMessage('ユーザー名を半角英数字で入力をしてください'),
    check('newUserEmail').isEmail(),
    check('newUserPasswd').isAlphanumeric().isLength({ min: 7, max: 32 }).withMessage('パスワードを半角英数字の7文字以上で入力をしてください'),
    check('newUserConfmPasswd').custom(( _, { req }) => { 
        if (req.body.newUserPasswd !== req.body.newUserConfmPasswd) { 
            throw new Error('パスワード（確認）と一致しません')
        }
        return true;
    }),
]