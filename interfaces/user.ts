import mongoose from 'mongoose';

export interface IUser {
    name: string,
    email: string,
    password: string,
    since: Date,
    _id: mongoose.ObjectId,
    admin: boolean,
}

export interface ISession {
    isLoggedIn: boolean;
    token: string;
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