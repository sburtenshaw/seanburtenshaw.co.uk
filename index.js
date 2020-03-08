const app = require('express')();

const port = 500;

app.get('/', (req, res) => {
	res.send('<h1>Love you loads</h1><p>Pleaseeeee make teaaaaa <3 <3 <3</p>');
});

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});