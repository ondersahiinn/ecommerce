import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Districts from '@model/districts';
import { useRouter } from 'next/router';


const handler = connectDB(async (req: NextApiRequest, res: NextApiResponse) => {
    const { cityId } = req.query

    if (!!cityId && typeof cityId === 'string') {
        try {
            const categories = await Districts.findOne({ city: parseInt(cityId) })
            return res.status(200).json(categories);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    else {
        return res.status(400).json('query params not found');
    }


})


export default handler;