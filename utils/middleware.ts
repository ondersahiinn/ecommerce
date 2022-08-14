import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';


export function middleware(req: NextApiRequest, res: NextApiResponse) {
    const basicAuth = req.headers.authorization
    if (basicAuth) {
        const auth = basicAuth.split(' ')[1]
        const decodedToken = jwt.verify(auth, "onder", (error, decoded) => {
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
        console.log('decodedToken', decodedToken)
        return NextResponse.next()

    }
    
}

// export const checkAuth = ({
//     redirectTo = "/login",
// }: {
//     redirectTo?: string;
// }) =>
//     withSession(
//         async ({ req }) => {
//             try {
//                 const user = req.session.get(COOKIES.serverToken);

//                 if (!user) throw new Error('unauthorized');

//                 return {
//                     props: {
//                         user,
//                     },
//                 };
//             } catch (err) {
//                 if (redirectTo) {
//                     return {
//                         redirect: {
//                             permanent: false,
//                             destination: redirectTo,
//                         },
//                     };
//                 } else {
//                     return {
//                         props: {},
//                     };
//                 }
//             }
//         },
//     );