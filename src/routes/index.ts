import { Router } from 'express';
import userRoutes from './user.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Hello World!');
});

routes.use(userRoutes);

export default routes;
