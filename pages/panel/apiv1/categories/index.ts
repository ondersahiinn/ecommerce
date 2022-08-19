import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@db/mongodb';
import Categories from '@model/categories';
import { middleware } from '@utils/middleware';
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from '@utils/session';



const handler = middleware(async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const categories = await Categories.find({}).sort({ createDateTime: -1 })
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json(error);
    }

})


export default withIronSessionApiRoute(connectDB(handler), sessionOptions);