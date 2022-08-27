import { IUser } from 'interfaces/user';
import { Schema, model, models } from 'mongoose';


export var UserSchema = new Schema<IUser>({
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
  address: {
    type: Schema.Types.ObjectId,
    ref: 'address'
  },
  since: {
    type: Date,
    default: Date.now
  }
});


const Users = models.Users || model<IUser>('Users', UserSchema);

export default Users;