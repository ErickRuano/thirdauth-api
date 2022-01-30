import { config } from 'dotenv'
import request from './request'
config()

const authenticate = async ({ options, headers }={})=>{
    
    let params = {
        hostname: 'api.etherscan.io',
        path: options || '/api?module=account&action=tokennfttx&contractaddress=0xec3a445010a3d8a201d4460c5570de49dda590df&address=0x103f7abeac7771b5045869433ee261a88e64192b&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=KA1IGUTZX64DB7J5S68KWEQT6GT7P6N9S6',
        headers: headers || {}
    }
    
   const results = await request(params);
   console.log(results);
   return results;
}

export default authenticate;