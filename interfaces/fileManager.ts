import { IUser } from './user';

export interface IFiles {
  url: string;
  userId: IUser;
  createdAt?: string;
  updatedAt?: string;
}

export interface IFileList {
  url: string;
  name: string;
  size: number;
  createdAt: string;
}