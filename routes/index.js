import express from 'express';
import Register from '../models/register.js';
import { fileURLToPath } from 'url';
import {join, dirname} from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const registerRouter = express.Router();

registerRouter.post("/submit", async (req, res) => {
    const { first_name, last_name, email_address, username, password } = req.body;

    try {
        const newRegister = new Register({
            first_name,
            last_name,
            email_address,
            username,
            password
        });

        await newRegister.save();
        res.send(req.body);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Error saving user.' });
    }
})

export default registerRouter;