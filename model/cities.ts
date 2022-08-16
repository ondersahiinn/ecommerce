
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

export var citiesSchema = new Schema({
    code: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
 
}, { collection: 'cities' });

var Cities = mongoose.model('cities', citiesSchema);

export default Cities;