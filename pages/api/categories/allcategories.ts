import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import cities from '@model/cities';


const handler = connectDB(async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const categories = await cities.find({}).sort({ createDateTime: -1 })
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(400).json(error);
    }

})


export default handler;