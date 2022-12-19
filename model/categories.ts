import { Schema, model, models } from 'mongoose';


var categories = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    children: [{
        type: Schema.Types.ObjectId,
        ref: "categories",
    }],
    image: {
        type: String,
    },
    slug: {
        type: String,
        required: true
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