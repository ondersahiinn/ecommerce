import mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const connectDB = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  if (mongoose.connection.readyState) {
    return handler(req, res);
  }
  else {
    try {
      await mongoose.connect(process.env.MONGODB_URI as string);
      return handler(req, res);
    }
    catch {
      res.status(403).json({hata:'env okunamadı'})
    }
   
  }

};


export default connectDB;