import redis, {RedisClient} from 'redis';

const client: RedisClient = redis.createClient({
    host: process.env.REDIS_IP  || '127.0.0.1',
    port: process.env.REDIS_PORT as unknown as number || 6379,
});


client.on('error', (err: Error) => {
    console.log('Error ' + err);
});


export default client;
