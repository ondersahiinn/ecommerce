import mongoose from 'mongoose';

export interface IUser {
    _doc?: any
    name: string,
    email: string,
    password: string,
    since: Date,
    phone: string,
    _id: mongoose.ObjectId,
    address: mongoose.ObjectId,
    admin: boolean,
}

export interface ISession {
    isLoggedIn: boolean;
    token: string;
    user: IUser
    name: string,
    email: string,
    password: string,
    since: Date,
    _id: mongoose.ObjectId,
    admin: boolean,

}

export interface IJwt {
    email: string,
    password: string,
    id: mongoose.ObjectId,
    admin: boolean,
}