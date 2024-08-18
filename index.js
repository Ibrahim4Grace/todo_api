import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDb, sequelize } from './config/data-source.js';
import setupSwagger from './config/swagger.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import colors from 'colors';

import routes from './routes/index.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(morgan('tiny'));
app.disable('x-powered-by');

// Use routes defined in the routes module
app.get('/', (req, res) => {
  res.send('Hello i am todo list api');
});
app.use(routes);
// Setup Swagger
setupSwagger(app);

app.use(notFound);
app.use(errorHandler);

const port = process.env.POSTGRES_PORT || 6000;

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`.yellow);
  });
});
connectDb();
export default app;
