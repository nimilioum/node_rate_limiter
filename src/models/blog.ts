import { model, Schema, Model, Document, ObjectId } from 'mongoose';


export const BlogSchema: Schema = new Schema({
    name: String,
    author: String,
    created: { type: Date, default: Date.now() },
});

export interface BlogInterface extends Document {
    name: string,
    author: string,
    created: Date,
    _id?: any
}

const Blog: Model<BlogInterface> = model('blog', BlogSchema);
export default Blog;