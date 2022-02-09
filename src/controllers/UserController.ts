import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  static async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await UserService.getAll();
      res.status(200).json({ users, count: users.length });
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
