import ErrorHandler from "../utils/ErrorHandler";
import UserRepository from "../repositories/UserRepository";
import IUser from "../interfaces/iUser";

class UserService {
	

	public async getAll(): Promise<Array<IUser>> {
		const users = await UserRepository.getAll();

		if (users.length === 0) {
			throw new ErrorHandler("No users found", 404);
		}
		return users;
	}

	public async create(user:IUser): Promise<IUser> {
		const {
			name, lastName, email, password,
		} = user;

		if (!name || !lastName || !email || !password) {
			throw new ErrorHandler("Missing fields", 400);
		}

		const userAlreadyExists = await UserRepository.getByEmail(email);

		if (userAlreadyExists) {
			throw new ErrorHandler("User already exists", 400);
		}

		const newUser = await UserRepository.create(user);
		return newUser;
	}

	public async delete(id: string): Promise<IUser> {
		const deletedUser = await UserRepository.delete(id);
		return deletedUser;
	}
}

export default new UserService();
