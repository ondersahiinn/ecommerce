import jwt from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';


export const middlewareAdmin = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    const jwtKey: string = process.env.JWT_SCREET_KEY as string
    const basicAuth = req.headers?.authorization
    if (basicAuth) {
        const auth = basicAuth.split(' ')[1]
        jwt.verify(auth, jwtKey, (error, decoded: any) => {
            if (error) {
                return res.status(401).json({
                    data: null,
                    status: 401,
                    message: 'User authentication failed. Unauthorized',
                    color: 'danger',
                })
            }
            else {
                if (!!decoded && decoded.admin) {
                    return handler(req, res)
                }
                else {
                    return res.status(401).json({
                        data: null,
                        status: 401,
                        message: 'User authentication failed. Unauthorized',
                        color: 'danger',
                    })
                }
            }
        })
    }

}