import ErrorHandler from '../utils/ErrorHandler';
import UserModel from '../models/UserModel';
import iUser from '../interfaces/iUser';

const UserRepository = {

  getAll: async (): Promise<Array<iUser>> => {
    try {
      const users = await UserModel.find();

      return users;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  },

  getByEmail: async (email: string): Promise<iUser> => {
    try {
      const user = await UserModel.findOne({ email });
      return user;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  },

  create: async (user: iUser): Promise<iUser> => {
    try {
      const newUser = await UserModel.create(user);
      return newUser;
    } catch (error) {
      console.log(error);

      throw new ErrorHandler('Something went wrong', 500);
    }
  },

  delete: async (id: string): Promise<iUser> => {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  },
};

export default UserRepository;
