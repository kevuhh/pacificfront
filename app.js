const express = require('express');
const app = express();
const serv = require('http').Server(app);
const bodyParser = require('body-parser');
const fs = require('fs');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

serv.listen(6969);
console.log("Server started.");