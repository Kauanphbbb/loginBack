import UserModel from '../models/UserModel';

class UserRepository {
  private users: Array<Object> = [];

  private user: Object = {};

  public async getAll(): Promise<Array<Object>> {
    this.users = await UserModel.find();
    return this.users;
  }
}

export default UserRepository;
