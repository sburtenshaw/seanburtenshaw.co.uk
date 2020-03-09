const express = require("express");
const path = require("path");

const app = express();

const port = 8000;

/*app.use(
	"/task_manager",
	express.static(path.join(__dirname, "apps/task_manager"))
);*/

app.get("/", (req, res) => {
	res.send('Homepage');
});

/*app.get("*", (req, res) => {
	const referer = req.get("referer");
	if (referer) {
		const dir = referer.slice(
			referer.indexOf(`${port}/`) + (String(port).length + 1),
			referer.length - 1
		);
		res.sendFile(path.join(__dirname, `apps/${dir}/${req.originalUrl}`));
	} else {
		res.sendFile(path.join(__dirname, req.originalUrl));
	}
});*/

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
