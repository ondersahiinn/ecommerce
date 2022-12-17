import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@db/mongoose';
import User from '@models/user';
const bcrypt = require("bcryptjs");

interface IBodyType {
  username: string;
  email: string;
  password: string;
}


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, email, password }: IBodyType = req.body;
    if (username && email && password) {
      const passwordHash = bcrypt.hashSync(password, 10);
      try {
        let user = new User({
          username,
          email,
          password: passwordHash,
        });
        let usercreated = await user.save();
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