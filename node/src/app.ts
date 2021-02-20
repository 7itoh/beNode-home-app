import Express, { Request, Response } from 'express'
import dotENV from 'dotenv'

dotENV.config();
const port = process.env.ENV_PORT;

const app = Express();

app.get('/', (req: Request, res: Response): void => {
    res.send('Hello World');
 })

app.listen(port, () => {
    console.log(`Listening on Port_Num: ${port}`);
});

export default app;