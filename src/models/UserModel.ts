import { Schema, model } from "mongoose";
import iUser from "../interfaces/iUser";

const UserSchema = new Schema<iUser>({
	name: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

const UserModel = model<iUser>("User", UserSchema);

export default UserModel;
