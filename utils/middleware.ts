import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken';


export function middleware(req: NextRequest) {
    const basicAuth = req.headers.get('authorization')
    if (basicAuth) {
        const auth = basicAuth.split(' ')[1]
        const decodedToken = jwt.verify(auth, 'secret_key');
        console.log('decodedToken', decodedToken)
        return NextResponse.next()

    }
    return new Response('Auth required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Ecommerce realm="Secure Area"',
        },
        statusText: 'Unauthorized',
    })
}