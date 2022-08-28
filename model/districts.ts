
import { Schema, model, models } from 'mongoose';


export const districtsSchema = new Schema({
    code: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    cityId: {
        type: Schema.Types.ObjectId,
        ref: 'cities',
        required: true,
    },
    city: {
        type: Number,
        required: true,
    },

});

const Districts = models.districts || model('districts', districtsSchema);

export default Districts;