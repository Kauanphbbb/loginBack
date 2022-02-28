import ErrorHandler from '../utils/ErrorHandler';
import { IUserRepository } from '../repositories/IUserRepository';
import IUser from '../interfaces/IUser';

class UserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getAll(): Promise<Array<IUser>> {
    const users = await this.userRepository.getAll();

    if (users.length === 0) {
      throw new ErrorHandler('No users found', 404);
    }
    return users;
  }

  async create(user:IUser): Promise<IUser> {
    const {
      name, lastName, email, password,
    } = user;

    if (!name || !lastName || !email || !password) {
      throw new ErrorHandler('Missing fields', 400);
    }

    const userAlreadyExists = await this.userRepository.getByEmail(email);

    if (userAlreadyExists) {
      throw new ErrorHandler('User already exists', 400);
    }

    const newUser = await this.userRepository.create(user);
    return newUser;
  }

  async delete(id: string): Promise<IUser> {
    const deletedUser = await this.userRepository.delete(id);
    return deletedUser;
  }

  async update(id: string, user: IUser): Promise<IUser> {
    const userEmailAlreadyExists = await this.userRepository.getByEmail(user.email);
    const currentUser = await this.userRepository.getById(id);

    if (user.email !== currentUser.email) {
      if (userEmailAlreadyExists) {
        throw new ErrorHandler('Email already exists!', 400);
      }
    }

    const updatedUser = await this.userRepository.update(id, user);
    return updatedUser;
  }
}

export default UserService;
