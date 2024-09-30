import express from 'express';
import bodyParser from 'body-parser';
import registerRouter from '../routes/index.js';
import loginRouter from '../routes/loginRoute.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', registerRouter);
app.use('/', loginRouter);

export default app;