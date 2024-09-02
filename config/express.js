import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import {join, dirname} from 'path';
import registerRouter from '../routes/index.js';
import cors from 'cors';

const app = express();
app.use(cors());

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', registerRouter);

export default app;