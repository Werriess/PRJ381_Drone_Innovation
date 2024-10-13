import connectDB from './config/db.js';
//import seedDatabase from './src/js/seed.js';
import app from './config/express.js';
import dotenv from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '.env') });

const PORT = process.env.PORT || 8001;

connectDB().then(() => {
    app.listen(PORT, async () => {
        console.log(`App is running on ${PORT}`);
        //await seedDatabase(); 
    });
}).catch((error) => {
    console.error('Database connection failed:', error);
});
