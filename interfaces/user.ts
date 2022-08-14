import mongoose from 'mongoose';

export interface IUser {
    name: string,
    email: string,
    password: string,
    since: Date,
    _id: mongoose.ObjectId,
    admin: boolean,
}