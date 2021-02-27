import session from 'express-session';
import dotENV from 'dotenv';
dotENV.config();

const sess: {
  secret: string,
  cookie: { maxAge: number},
  resave: boolean,
  saveUninitialized: boolean
} = {
  secret: process.env.ENV_SSESS_SECRET!,
  cookie: { maxAge: 60000},
  resave: false,
  saveUninitialized: false,
}

export = session(sess);

declare module 'express-session' {
  interface SessionData {
    username: string;
    password: string;
    newUserName: string;
    newUserEmail: string;
    newUserPasswd: string;
  }
}
