import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@db/mongodb';
import Categories from '@model/categories';


const handler = connectDB(async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const categories = await Categories.find({}).sort({ createDateTime: -1 })
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(400).json(error);
    }

})


export default handler;