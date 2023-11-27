import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import productsRoutes from './routes/product.routes.js';
import AuthRoutes from './routes/auth.routes.js';
import emailRoutes from './routes/email.routes.js'
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api', AuthRoutes);
app.use('/api', productsRoutes);
app.use('/api', emailRoutes);
export default app;