import mongoose from 'mongoose';
var Schema = mongoose.Schema;

export var users = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  since: {
    type: Date,
    default: Date.now
  }
}, { collection: 'users' });

mongoose.models = {};

var Users = mongoose.model('users', users);

export default Users;