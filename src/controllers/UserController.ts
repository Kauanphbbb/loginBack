import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  private users: Array<Object> = [];

  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      this.users = await UserService.getAll();
      res.status(200).json(this.users);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
