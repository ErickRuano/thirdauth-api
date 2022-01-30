import gate from '../services/gate'

export default async (req, res)=>{
	if(req.method === 'GET'){
		res.send(await gate());
	}else{
		res.send('this method is not supported')
	}
}