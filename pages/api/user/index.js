import connectDB from '../../../db/mongodb';
import User from '../../../model/user';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { name, email, password } = req.body;
    if (name && email && password) {
        try {
          // Hash password to store it in DB
          var user = new User({
            name,
            email,
            password,
          });
          // Create new user
          // let { db } = await connectToDatabase();
          // await connectDB.collection('user').insertOne((user));
          var usercreated = await user.save();
          return res.status(200).send(usercreated);
        //   return res.json({
        //     message: 'Post added successfully',
        //     success: true,
        // });
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);