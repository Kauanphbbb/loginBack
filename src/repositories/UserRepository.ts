import ErrorHandler from '../utils/ErrorHandler';
import UserModel from '../models/UserModel';

class UserRepository {
  static async getAll(): Promise<Array<Object>> {
    try {
      const users = await UserModel.find();

      return users;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  }

  static async getByEmail(email: string): Promise<Object> {
    try {
      const user = await UserModel.findOne({ email });
      return user;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  }

  static async create(user: Object): Promise<Object> {
    try {
      const newUser = new UserModel(user);
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      console.log(error);

      throw new ErrorHandler('Something went wrong', 500);
    }
  }

  static async delete(id: string): Promise<Object> {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  }
}

export default UserRepository;
