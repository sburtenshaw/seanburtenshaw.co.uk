const app = require('express')();

const port = 8000;

app.get('/', (req, res) => {
	res.send('Hi baby. Love you loads <3<3<3');
});

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});