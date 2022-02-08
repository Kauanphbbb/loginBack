import ErrorHandler from '../utils/ErrorHandler';
import UserModel from '../models/UserModel';

class UserRepository {
  private users: Array<Object> = [];

  private user: Object = {};

  public async getAll(): Promise<Array<Object>> {
    try {
      this.users = await UserModel.find();

      return this.users;
    } catch (error) {
      throw new ErrorHandler('Something went wrong', 500);
    }
  }
}

export default new UserRepository();
