import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import http from 'http'
import productsRoutes from './routes/product.routes.js';
import AuthRoutes from './routes/auth.routes.js';
import emailRoutes from './routes/email.routes.js'
import { FRONT_URL } from './config.js';
import cors from 'cors';

const app = express();
const server = http.createServer(app)
server.keepAliveTimeout = 60000
app.use(cors({ origin: FRONT_URL, credentials: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api', AuthRoutes);
app.use('/api', productsRoutes);
app.use('/api', emailRoutes);
export default app;