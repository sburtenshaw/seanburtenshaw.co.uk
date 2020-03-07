const app = require('express')();

const port = 8000;

app.get('/', (req, res) => {
	res.send('Test!');
});

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});