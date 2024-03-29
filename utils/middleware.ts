import { getIronSession } from 'iron-session';
import jwt from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from './session';


export const middleware = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    const jwtKey: string = process.env.JWT_SCREET_KEY as string
    const basicAuth = req.headers?.authorization
    if (basicAuth) {
        const auth = basicAuth.split(' ')[1]
        jwt.verify(auth, jwtKey, (error, decoded) => {
            if (error) {
                return res.status(401).json({
                    data: null,
                    status: 401,
                    message: 'User authentication failed. Unauthorized',
                    color: 'danger',
                })
            }
            return handler(req, res)
        })
    } else {
        const session = await getIronSession(req, res, sessionOptions);
        if (session.user === undefined || session.user.admin === true) {
            return handler(req, res)
        }

        return res.status(401).json({
            data: null,
            status: 401,
            message: 'User authentication failed. Unauthorized',
            color: 'danger',
        })
    }

}