import authenticate from './../services/authenticate'

export default async (req, res)=>{
	if(req.method === 'GET'){
		res.send(await authenticate());
	}else{
		res.send('this method is not supported')
	}
}