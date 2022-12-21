import { IUser } from './user';

export interface IFiles {
  url: string;
  userId: IUser;
  createdAt?: string;
  updatedAt?: string;
}
