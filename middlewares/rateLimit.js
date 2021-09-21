const redis = require('../redis/client');


 function rateLimit(quota, expire) {


    return async function(req, res, next) {
        
        const ip = req.connection.remoteAddress;
        const id = req.method + '_' + req.path + '_' + ip;
        
        redis.incr(id);
        redis.get(id, (err, value) => {
            console.log(value);
            if (value > quota) {
                res.status(429).send({
                    response:"Too many requests!"
                })
            }
            else {
                if(value == 1) {
                    redis.expire(ip, expire);
                }

                
                res.set({
                    'X-Remaining-Reqursts': (quota - value),
                    'X-Quota': quota,
                });

                
                next();
            }
        });
    }
}


module.exports = rateLimit;
