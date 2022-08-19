
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

export var districtsSchema = new Schema({
    code: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cities',
        required: true,
    },
    city: {
        type: Number,
        required: true,
    },

}, { collection: 'districts' });

var Districts = mongoose.model('districts', districtsSchema);

export default Districts;