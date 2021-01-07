let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

//initialize
let app = express();

//static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

//body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes

//listen
const PORT = 3005;
app.listen(PORT);