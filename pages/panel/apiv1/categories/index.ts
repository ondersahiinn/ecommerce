import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@db/mongodb';
import Categories from '@model/categories';
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from '@utils/session';
import { middlewareAdmin } from '@utils/adminmiddleware';



const handler = middlewareAdmin(async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const categories = await Categories.find({}).sort({ createDateTime: -1 })
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json(error);
    }

});


export default withIronSessionApiRoute(connectDB(handler), sessionOptions);