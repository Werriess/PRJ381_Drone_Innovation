import express from 'express';
import bodyParser from 'body-parser';
import registerRouter from '../routes/index.js';
import loginRouter from '../routes/loginRoute.js';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', registerRouter);
app.use('/', loginRouter);

export default app;