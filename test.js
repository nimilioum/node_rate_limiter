// const redis = require('redis');

// const client = redis.createClient({
//     host: '127.0.0.1',
//     port: 6379,
// });

// client.on('connect', function() {
//     console.log('Connected!');
//   });

// const a = client.incr('a')

// client.on('error', err => {
//     console.log('Error ' + err);
// });
// var mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1/node_learn", {useNewUrlParser: true, useUnifiedTopology: true});

// const Blog = require('./models/blog');

// b1 = Blog.create({name:"a", author:"a"});
// b2 = Blog.find().select('name author').exec(function(err, story) {
    // console.log(story);
// });
// console.log(b2);