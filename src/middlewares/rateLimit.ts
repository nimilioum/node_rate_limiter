import redis from '../redis/client';
import {Request, Response, NextFunction} from 'express';

 function rateLimit(quota:number, expire:number) {


    return async function(req:Request, res:Response, next:NextFunction) {
        
        const ip = req.socket.remoteAddress;
        const id = req.method + '_' + req.path + '_' + ip;
        
        redis.incr(id);
        redis.get(id, (err, value) => {
            const count: number = value as unknown as number;
            const remaining:number = (quota - count);
            res.set({
                'X-Remaining-Reqursts': remaining > 0 ? remaining : 0,
                'X-Quota': quota,
            });


            console.log(count);
            if (count > quota) {
                res.status(429).send({
                    response:"Too many requests!"
                })
            }
            else {
                if(count == 1) {
                    redis.expire(id, expire);
                }

                
                

                
                next();
            }
        });
    }
}


export default rateLimit;
