import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import User from '../../../model/user';
const bcrypt = require("bcryptjs");

interface IBodyType {
  name: string;
  email: string;
  password: string;
  phone?: string;
}


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, password, phone }: IBodyType = req.body;
    if (name && email && password) {
      const passwordHash = bcrypt.hashSync(password, 10);
      try {
        var user = new User({
          name,
          email,
          password: passwordHash,
          phone,
        });
        var usercreated = await user.save();
        const status: number = 201;
        return res.status(status).send(usercreated);
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);