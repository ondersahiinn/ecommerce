
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

export var AddressSchema = new Schema({
    nameSurname: {
        type: String,
        required: true
    },
    ownerBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    phone: {
        type: String,
        maxLength: 10,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cities',
        required: true,
    },
    district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'districts',
        required: true,
    },
    since: {
        type: Date,
        default: Date.now
    }
}, { collection: 'address' });

var Address = mongoose.model('address', AddressSchema);

export default Address;