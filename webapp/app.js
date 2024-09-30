import connectDB from './config/db.js';
import app from './config/express.js';
import dotenv from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '.env') });

const PORT = process.env.PORT || 8001;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on ${PORT}`);
    });
});
