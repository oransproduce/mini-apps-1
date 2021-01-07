let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout', {
  useNewUrlParser: true,
  useUnifiedTopology: true
 });

let schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: Number,
  phone: String,
  cardNumber: Number,
  expirationDate: String,
  cvv: Number,
  billingZip: Number
});

let CheckoutData = mongoose.model('checkoutData', schema);

module.exports = CheckoutData;