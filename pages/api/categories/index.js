// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '../../../db/mongodb';
import Categories from '../../../model/categories';
var mongoose = require('mongoose');

async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
        }

        case 'POST': {
            return addPost(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}
export default connectDB(handler)

// Getting all posts.
async function getPosts(req, res) {
    try {
        var questions = mongoose.model('Categories');
        let posts = await questions.find({}).sort({ createDateTime: -1 })
        return res.json({
            message: JSON.parse(JSON.stringify(posts)),
            success: true,
            data: posts
        });

    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// Adding a new post
async function addPost(req, res) {
    try {
        var categry = new Categories(req.body);
        var categoryCreated = await categry.save();
        return res.status(200).send({
            message: 'Post added successfully',
            success: true,
            categoryCreated
        })
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// Updating a post
async function updatePost(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('posts').updateOne(
            {
                _id: new ObjectId(req.body),
            },
            { $set: { published: true } }
        );

        return res.json({
            message: 'Post updated successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// deleting a post
async function deletePost(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('posts').deleteOne({
            _id: new ObjectId(req.body),
        });

        return res.json({
            message: 'Post deleted successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}