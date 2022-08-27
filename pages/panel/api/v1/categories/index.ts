import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@db/mongodb';
import jwt from 'jsonwebtoken';
import { IUser, ISession } from 'interfaces/user';
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@utils/session";
import UserShema from '@model/user'
import mongoose from 'mongoose';
const bcrypt = require("bcryptjs");

interface IBodyType {
    name: string;
    email: string;
    password: string;
}



const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(mongoose.connection.readyState);


};
export default (handler);