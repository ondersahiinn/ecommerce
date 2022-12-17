
import { ICities } from 'interfaces/cities';
import { Schema, model, models } from 'mongoose';

export var citiesSchema = new Schema({
    code: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },

});


const Cities = models.cities || model<ICities>('cities', citiesSchema);

export default Cities;