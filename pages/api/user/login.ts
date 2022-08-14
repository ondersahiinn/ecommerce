import mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import jwt from 'jsonwebtoken';
import { IUser, ISession } from 'interfaces/user';
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../../utils/session";
const bcrypt = require("bcryptjs");

interface IBodyType {
    name: string;
    email: string;
    password: string;
}



const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password }: IBodyType = req.body;

    if (email && password) {
        var questions = mongoose.model('users');
        let user: IUser | null = await questions.findOne({ email: email });
        const jwtKey: string = process.env.JWT_SCREET_KEY as string

        if (user === null) {
            return res.status(404).send({
                data: null,
                status: 404,
                message: 'User not found. Authentication failed.',
                color: 'danger',
            });
        }
        else if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({
                email: user?.email,
                password: user?.password,
                id: user?._id,
                admin: user?.admin,
            },
                jwtKey,
                { expiresIn: "2h" }
            )

            const userSesion = { isLoggedIn: true, token, ...user } as ISession;
            req.session.user = userSesion;
            await req.session.save();

            return res.json({
                message: "token created expiresIn 2h",
                status: 200,
                data: { token: token, type: "Bearer", user: user },
                color: 'success',
            });
        }
        else {
            return res.status(403).send({
                data: null,
                status: 403,
                message: 'User information error. Authentication failed.',
                color: 'danger',
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
export default withIronSessionApiRoute(connectDB(handler), sessionOptions);