import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Cities from '@model/cities';


const handler = connectDB(async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const cities = await Cities.find({}).sort({ name: -1 })
        return res.status(200).json({
            message: "token created expiresIn 2h",
            status: 200,
            data: cities,
            color: 'success',
        });
    } catch (error) {
        return res.status(400).json({
            message: "token created expiresIn 2h",
            status: 400,
            data: [],
            color: 'success',
        });
    }

})


export default handler;