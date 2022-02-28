import { Router } from 'express';
import UserService from '../services/UserService';
import UserController from '../controllers/UserController';
import UserRepository from '../repositories/UserRepository';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const routes = Router();

routes.get('/users', userController.getAll.bind(userController));
routes.post('/users', userController.create.bind(userController));
routes.delete('/users/:id', userController.delete.bind(userController));
routes.put('/users/:id', userController.update.bind(userController));

export default routes;
