import Blog from '../models/blog';
import {Request, Response} from 'express';

export async function list(req: Request, res: Response) {
    let blogs = await Blog.find();
    res.send(blogs)
}

export async function detail(req: Request, res: Response) {
    try {
        const blog = await Blog.findOne({_id: req.params.id});
        res.send(blog)
    } catch(error) {
        res.status(404).send('blog not found');
    }
    
}

export async function create(req: Request, res: Response) {
    const blog = await Blog.create({
        name: req.body.name,
        author: req.body.author,
    });

    res.send(blog)
}

export async function update(req: Request, res: Response) {
    try {
    const blog = await Blog.findOne({_id: req.params.id});
        if(blog === null){ res.status(404).send('blog not found');}
        blog!.name = req.body.name || blog!.name;
        blog!.author = req.body.author || blog!.author;
        blog!.save();
        res.send(blog);
    } catch(error) {
        res.status(503).send('blog update failed');
    }
}

export async function deleteOne(req: Request, res: Response) {
    await Blog.deleteOne({_id: req.params.id});
    res.status(204).send();
}
