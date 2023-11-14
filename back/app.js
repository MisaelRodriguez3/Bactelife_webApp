import express from 'express';
import morgan from 'morgan';
import productsRoutes from './routes/product.routes.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json())
app.use('/api', productsRoutes);
export default app;