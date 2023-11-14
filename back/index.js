import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connection } from './db.js';


connection()
app.listen(3000)
console.log("On port ", 3000)