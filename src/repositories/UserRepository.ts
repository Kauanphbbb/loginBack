import ErrorHandler from "../utils/ErrorHandler";
import UserModel from "../models/UserModel";
import iUser from "../interfaces/iUser";

class UserRepository {
	public async getAll(): Promise<Array<iUser>> {
		try {
			const users = await UserModel.find();

			return users;
		} catch (error) {
			throw new ErrorHandler("Something went wrong", 500);
		}
	}

	public async getByEmail(email: string): Promise<iUser> {
		try {
			const user = await UserModel.findOne({ email });
			return user;
		} catch (error) {
			throw new ErrorHandler("Something went wrong", 500);
		}
	}

	public async create(user: iUser): Promise<iUser> {
		try {
			const newUser = new UserModel(user);
			const savedUser = await newUser.save();
			return savedUser;
		} catch (error) {
			console.log(error);

			throw new ErrorHandler("Something went wrong", 500);
		}
	}

	public async delete(id: string): Promise<iUser> {
		try {
			const deletedUser = await UserModel.findByIdAndDelete(id);
			return deletedUser;
		} catch (error) {
			throw new ErrorHandler("Something went wrong", 500);
		}
	}
}

export default new UserRepository();
