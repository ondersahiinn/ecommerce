import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var categories = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    children: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    image: {
        type: String,
    },
    seoTitle: {
        type: String,
        required: true
    },
    seoKeyword: {
        type: String,
        required: true
    },
    seoDescription: {
        type: String,
        required: true
    },
    createDateTime: {
        type: Date,
        default: Date.now
    }
}, { collection: 'categories' });

mongoose.models = {};

var Categories = mongoose.model('Categories', categories);

export default Categories;