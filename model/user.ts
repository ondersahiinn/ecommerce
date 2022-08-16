import mongoose from 'mongoose';
var Schema = mongoose.Schema;

export var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    maxLength: 10
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  since: {
    type: Date,
    default: Date.now
  }
}, { collection: 'users' });

var Users = mongoose.model('users', UserSchema);

export default Users;