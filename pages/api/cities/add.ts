import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Cities from '@model/cities';
const bcrypt = require("bcryptjs");

interface IBodyType {
  name: string;
  code: string
}


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const body: IBodyType[] = req.body;
    if (body.length > 0) {
      try {
        const result: IBodyType[] = []
        body.forEach(async (element: IBodyType) => {
          const cities = new Cities({
            name: element.name,
            code: element.code
          });
          const citiesCreated = await cities.save();
          result.push(citiesCreated)
        })

        const status: number = 201;
        return res.status(status).json(result);
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