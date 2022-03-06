import IUser from '../interfaces/IUser';

export interface IUserRepository {
    getAll(): Promise<Array<IUser>>;
    getByEmail(email: string): Promise<IUser> | null;
    getById(id: string): Promise<IUser> | null;
    create(user: IUser): Promise<IUser>;
    delete(id: string): Promise<IUser>;
    update(id: string, user: IUser): Promise<IUser>;
}
