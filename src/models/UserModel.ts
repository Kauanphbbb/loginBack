import { Schema, model } from 'mongoose';
import IUser from '../interfaces/IUser';

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;
