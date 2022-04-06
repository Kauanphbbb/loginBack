import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUserRepository } from '../repositories/IUserRepository';
import ErrorHandler from '../utils/ErrorHandler';

class AuthController {
  private userService: IUserRepository;

  constructor(userService: IUserRepository) {
    this.userService = userService;
  }

  async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      if (!password || !email) {
        throw new ErrorHandler('E-mail and password is needed', 401);
      }
      const user = await this.userService.getByEmail(email);

      if (!user) {
        throw new ErrorHandler('User not found', 404);
      }

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        throw new ErrorHandler('Invalid password', 401);
      }

      const secret = process.env.JWT_SECRET;

      // eslint-disable-next-line no-underscore-dangle
      const token = jwt.sign({ id: user._id, email: user.email }, secret, { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      console.log(error);

      next(error);
    }
  }
}

export default AuthController;
