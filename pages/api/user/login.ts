import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import jwt from 'jsonwebtoken';
import { IUser } from 'interfaces/user';

interface IBodyType {
    name: string;
    email: string;
    password: string;
}


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password }: IBodyType = req.body;

    if (email && password) {
        var questions = mongoose.model('users');
        let user: IUser | null = await questions.findOne({ email: email });
        const jwtKey: string = process.env.JWT_SCREET_KEY || "jwtKey";

        if (!user) {
            return res.status(404).send({
                data: null,
                status: 404,
                message: 'User not found. Authentication failed.',
                color: 'danger',
            });
        }
        else {
            const token = jwt.sign({
                email: user?.email,
                password: user?.password,
                id: user?._id
            },
                jwtKey,
                { expiresIn: "2h" }
            )
            return res.json({
                message: "token created expiresIn 2h",
                status: 200,
                data: token,
                color: 'success',
            });
        }
    } else {
        return res.status(422).send({
            message: 'fail',
            status: 422,
            color: 'danger',
            data: null
        });
    }

};

export default connectDB(handler);