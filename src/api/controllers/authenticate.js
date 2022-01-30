import authenticate from './../services/authenticate'

export default async (req, res) => {
	if (req.method === 'POST') {
		const { wallet, signature, message } = req.body;
		if (!wallet || !signature || !message) res.status(401).send('Unauthorized').end();
		res.send(await authenticate(wallet, signature, message)).end();
	} else {
		res.send('this method is not supported');
	}
}