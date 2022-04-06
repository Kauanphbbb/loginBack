import { Router } from 'express';
import userRoutes from './user.routes';
import authenticateRoutes from './auth.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Hello World!');
});

routes.use(userRoutes);
routes.use(authenticateRoutes);

export default routes;
