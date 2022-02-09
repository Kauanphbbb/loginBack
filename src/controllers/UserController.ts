import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';

const UserController = {

  getAll: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await UserService.getAll();
      res.status(200).json({ users, count: users.length });
    } catch (error) {
      next(error);
    }
  },

  create: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await UserService.delete(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },
};

export default UserController;
