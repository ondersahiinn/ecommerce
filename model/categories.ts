import { Schema, model, models } from 'mongoose';


var categories = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    children: [{
        type: Schema.Types.ObjectId,
        ref: "categories",
    }],
    image: {
        type: String,
    },
    seoTitle: {
        type: String,
        required: false
    },
    seoKeyword: {
        type: String,
        required: false
    },
    seoDescription: {
        type: String,
        required: false
    },
    createDateTime: {
        type: Date,
        default: Date.now
    }
});


const Categories = models.Categories || model('Categories', categories);

export default Categories;