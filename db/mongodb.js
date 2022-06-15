import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
  console.log(mongoose.connections);
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(process.env.mongodburl);
  return handler(req, res);
};

export default connectDB;