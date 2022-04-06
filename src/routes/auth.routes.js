import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import UserRepository from '../repositories/UserRepository';

const userRepository = new UserRepository();
const authController = new AuthController(userRepository);

const routes = Router();

routes.post('/authenticate', (req, res, next) => authController.authenticate(req, res, next));

export default routes;
