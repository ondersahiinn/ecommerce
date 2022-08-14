import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';


export function middleware(req: NextApiRequest, res: NextApiResponse) {
    const basicAuth = req.headers?.authorization
    if (basicAuth) {
        const auth = basicAuth.split(' ')[1]
        jwt.verify(auth, "onder", (error, decoded) => {
            if (error) {
                return res.status(401).json({
                    data: null,
                    status: 401,
                    message: 'User authentication failed. Unauthorized',
                    color: 'danger',
                })
            }
            return decoded
        })
    }

}