import { Ratelimit } from "@upstash/ratelimit"; 
import { Redis } from "@upstash/redis";

import dotenv from "dotenv"; 
dotenv.config(); 
// create a ratelimiter that allows 10 per requests
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(), 
    limiter: Ratelimit.slidingWindow(100, "60 s")
}); 


// async function testConnection() {
//   try {
//     const redis = Redis.fromEnv();
//     await redis.set('test', 'connection successful');
//     const result = await redis.get('test');
//     console.log('✅ Upstash connection successful:', result);
//     await redis.del('test');
//   } catch (error) {
//     console.error('❌ Upstash connection failed:', error.message);
//   }
// }

// testConnection();

export default ratelimit; 

