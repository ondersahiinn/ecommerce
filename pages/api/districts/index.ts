import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Districts from '@model/districts';

const handler = connectDB(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const districts = await Districts.find({}).sort({ city: -1 });
    return res.status(200).json({
      message: 'token created expiresIn 2h',
      status: 200,
      data: districts,
      color: 'success',
    });
  } catch (error) {
    return res.status(400).json({
      message: 'token created expiresIn 2h',
      status: 400,
      data: [],
      color: 'danger',
    });
  }
});

export default handler;
