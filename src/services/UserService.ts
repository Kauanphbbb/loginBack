import ErrorHandler from '../utils/ErrorHandler';
import UserRepository from '../repositories/UserRepository';

class UserService {
  private users: Array<Object> = [];

  public async getAll(): Promise<Array<Object>> {
    this.users = await UserRepository.getAll();

    if (this.users.length === 0) {
      throw new ErrorHandler('No users found', 404);
    }
    return this.users;
  }
}

export default new UserService();
