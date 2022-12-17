import { ICategories } from 'interfaces/categories';
import mongoose, { model, models } from 'mongoose';
var Schema = mongoose.Schema;

var categories = new Schema<ICategories>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    }],
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
});

const Categories = models.Categories || model<ICategories>('Categories', categories);

export default Categories;