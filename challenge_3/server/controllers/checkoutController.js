let models = require('../models/checkoutModel.js')
let getData = (req, res) => {
  console.log(req.params.id);
  models.getData(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
};

let postData = (req, res) => {
  console.log(req.body);
  let data = req.body;
  models.postData(data, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
};

let putData = (req, res) => {
  let id = req.params.id;
  let data = req.body;
  models.putData(id, data, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

module.exports = {
  getData,
  postData,
  putData
}