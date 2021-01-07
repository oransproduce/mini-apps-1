let express = require('express');
let {getData, postData, putData} = require('./controllers/checkoutController.js');

let path = require('path');
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/checkout/:id', getData);
app.post('/checkout', postData);
app.put('/checkout/:id', putData);

app.listen(3000);

