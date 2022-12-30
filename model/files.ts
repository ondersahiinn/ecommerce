import { IFiles } from 'interfaces/fileManager';
import { Schema, model, models } from 'mongoose';

export const filesSchema = new Schema<IFiles>(
  {
    url: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  { timestamps: true }
);

const Files = models.files || model<IFiles>('files', filesSchema);

export default Files;
