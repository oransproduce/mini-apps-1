let db = require('../../database');

const getData = (id, cb) => {
  db.findById(id, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};

const postData = (data, cb) => {
  console.log(data);
  db.create({
    name: data.name,
    email: data.email,
    password: data.password
  }, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results);
    }
  })
};

const putData = (id, data, cb) => {
  let updateObj = {};
  for (let key in data) {
    updateObj[key] = data[key];
  }
  console.log(updateObj);
  db.updateOne({_id: id}, updateObj, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results);
    }
  })
};

module.exports = {
  getData,
  postData,
  putData
};