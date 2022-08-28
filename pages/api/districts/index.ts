import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Districts from '@model/districts';


const handler = connectDB(async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const categories = await Districts.find({}).sort({ city: -1 })
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(400).json(error);
    }

})


export default handler;