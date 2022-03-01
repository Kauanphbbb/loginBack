import { Router } from 'express';
import UserService from '../services/UserService';
import UserController from '../controllers/UserController';
import UserRepository from '../repositories/UserRepository';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const routes = Router();

routes.get('/users', (req, res, next) => userController.getAll(req, res, next));
routes.post('/users', (req, res, next) => userController.create(req, res, next));
routes.delete('/users/:id', (req, res, next) => userController.delete(req, res, next));
routes.put('/users/:id', (req, res, next) => userController.update(req, res, next));

export default routes;
