import ErrorHandler from '../utils/ErrorHandler';
import UserModel from '../models/UserModel';
import IUser from '../interfaces/IUser';
import { IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {
  private userModel = UserModel;

  async getAll(): Promise<Array<IUser>> {
    try {
      const users = await this.userModel.find();

      return users;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  }

  async getByEmail(email: string): Promise<IUser> | null {
    try {
      const user = await this.userModel.findOne({ email });
      return user;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  }

  async getById(id: string): Promise<IUser> | null {
    try {
      const user = this.userModel.findById(id);
      return user;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  }

  async create(user: IUser): Promise<IUser> {
    try {
      const newUser = await this.userModel.create(user);
      return newUser;
    } catch (error) {
      console.log(error);

      throw new ErrorHandler('Something went wrong', 500);
    }
  }

  async delete(id: string): Promise<IUser> {
    try {
      const deletedUser = await this.userModel.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  }

  async update(id: string, user: IUser): Promise<IUser> {
    try {
      const { email, name, lastName } = user;
      const updatedUser = await this.userModel.findByIdAndUpdate(
        id,
        { email, name, lastName },
        { new: true },
      );
      return updatedUser;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  }
}

export default UserRepository;
