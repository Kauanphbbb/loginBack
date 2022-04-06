import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  // eslint-disable-next-line
  constructor(private service: UserService) {}

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.service.getAll();
      res.status(200).json({ users, count: users.length });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.service.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.service.delete(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.service.update(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
