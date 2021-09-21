const redis = require('redis');

const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379,
});

// client.on('connect', function() {
//     console.log('Connected!');
//   });

client.on('error', err => {
    console.log('Error ' + err);
});


module.exports = client;
