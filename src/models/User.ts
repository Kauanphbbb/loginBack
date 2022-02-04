import { Schema, model } from 'mongoose';

interface User {
    name: string;
    lastName: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model<User>('User', UserSchema);

export default UserModel;
