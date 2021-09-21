var Blog = require('../models/blog');

exports.list = async function(req, res) {
    let blogs = await Blog.find();
    res.send(blogs)
}

exports.detail = async function(req, res) {
    try {
        let blog = await Blog.findOne({_id: req.params.id});
        res.send(blog)
    } catch(error) {
        res.status(404).send('blog not found');
    }
    
}

exports.create = async function(req, res) {
    let blog = await Blog.create({
        name: req.body.name,
        author: req.body.author,
    });

    res.send(blog)
}

exports.update = async function(req, res) {
    let blog;
    try {
        blog = await Blog.findOne({_id: req.params.id});
        blog.name = req.body.name || blog.name;
        blog.author = req.body.author || blog.author;
        blog.save();
    } catch(error) {
        res.status(404).send('blog update failed');
    }
}

exports.delete = async function(req, res) {
    await Blog.deleteOne({_id: req.params.id});
    res.status(204).send();
}