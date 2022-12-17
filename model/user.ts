import { IUser } from 'interfaces/user';
import { Schema, model, models } from 'mongoose';


export var UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
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
});


const Users = models.Users || model<IUser>('Users', UserSchema);

export default Users;