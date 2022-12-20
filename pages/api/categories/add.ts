import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Categories from '@model/categories';
import { ICategories } from 'interfaces/categories';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const body: ICategories[] = req.body;
        if (body.length > 0) {
            try {
                const categories = new Categories({
                    ...body
                });
                const citiesCreated = await categories.save();
                const status: number = 201;
                return res.status(status).json(citiesCreated);
            } catch (error) {
                return res.status(500).json(error);
            }
        } else {
            res.status(422).send({ err: 'Data not found' });
        }
    } else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);