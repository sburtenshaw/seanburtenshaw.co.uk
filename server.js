const express = require("express");
const path = require("path");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
	res.send('Homepage');
});

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
