import UserRepository from '../repositories/UserRepository';

class UserService {
  private userRepository: UserRepository;

  private users: Array<Object> = [];

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async getAll(): Promise<Array<Object>> {
    this.users = await this.userRepository.getAll();
    return this.users;
  }
}

export default UserService;
