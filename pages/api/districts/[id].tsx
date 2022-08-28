import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Districts from '@model/districts';
import { useRouter } from 'next/router';


const handler = connectDB(async (req: NextApiRequest, res: NextApiResponse) => {
    const router = useRouter();
    const { id } = router.query

    try {
        const categories = await Districts.findOne({ cityId: id })
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(400).json(error);
    }

})


export default handler;