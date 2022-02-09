import ErrorHandler from '../utils/ErrorHandler';
import UserRepository from '../repositories/UserRepository';
import IUser from '../interfaces/iUser';

class UserService {
  static async getAll(): Promise<Array<Object>> {
    const users = await UserRepository.getAll();

    if (users.length === 0) {
      throw new ErrorHandler('No users found', 404);
    }
    return users;
  }

  static async create(user:IUser): Promise<Object> {
    const {
      name, lastName, email, password,
    } = user;

    if (!name || !lastName || !email || !password) {
      throw new ErrorHandler('Missing fields', 400);
    }

    const userAlreadyExists = await UserRepository.getByEmail(email);

    if (userAlreadyExists) {
      throw new ErrorHandler('User already exists', 400);
    }

    const newUser = await UserRepository.create(user);
    return newUser;
  }
}

export default UserService;
