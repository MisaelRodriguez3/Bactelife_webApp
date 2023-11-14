import express from 'express';
import morgan from 'morgan';
import productsRoutes from './routes/product.routes.js';
import caseRoutes from './routes/caseStudies.routes.js';
import memebersRoutes from './routes/members.routes.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', productsRoutes);
app.use('/api', caseRoutes);
app.use('/api', memebersRoutes);

export default app;