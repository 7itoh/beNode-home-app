import Express from 'express'
import BodyParser from 'body-parser'

// express-session module
import Session from './modules/session'
// auth-router
import authRouter from './models/auth'

// Loading ENV Settings
import dotENV from 'dotenv'
dotENV.config();
const port = process.env.ENV_PORT;

// app start
const app = Express();

app.use(Session);
app.use(BodyParser.urlencoded({ extended: true }));
app.use('/', authRouter);

// Loading .ejs 
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(port, () => {
    console.log(`Listening on Port_Num: ${port}`);
});

export default app;