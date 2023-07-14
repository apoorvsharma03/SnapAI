import express from 'express';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

const router = express.Router();

cloudinary.config({
    cloud_name: 'dcpmg1kx9',
    api_key: '219117185731172',
    api_secret: 'jnzZnhTN3xA_jz8_hzjECQwK-MM',
})

//Get all posts
router.route('/').get(async(req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({success: true, data: posts});
    } catch (error) {
        res.status(500).json({success: false, message: error});
    }
});

//Create a post
router.route('/').post(async(req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url,
        })
        
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        res.status(500).json({success: false, message: error})
    }
});

export default router;