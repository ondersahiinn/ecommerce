
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

export var AddressSchema = new Schema({
    code: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cities',
        required: true,
    },

}, { collection: 'address' });

var Address = mongoose.model('address', AddressSchema);

export default Address;