var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    name: String,
    author: String,
    created: {type:Date, default:Date.now()},
});

var Blog = mongoose.model('blog', BlogSchema);
module.exports = Blog;