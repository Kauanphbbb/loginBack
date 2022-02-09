import ErrorHandler from '../utils/ErrorHandler';
import UserRepository from '../repositories/UserRepository';
import IUser from '../interfaces/iUser';

const UserService = {

  getAll: async (): Promise<Array<IUser>> => {
    console.log('getAll');

    const users = await UserRepository.getAll();

    if (users.length === 0) {
      throw new ErrorHandler('No users found', 404);
    }
    return users;
  },

  create: async (user:IUser): Promise<IUser> => {
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
  },

  delete: async (id: string): Promise<IUser> => {
    const deletedUser = await UserRepository.delete(id);
    return deletedUser;
  },
};

export default UserService;
