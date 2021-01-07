let express = require('express');
let path = require('path');
let _ = require('underscore');
let multiparty = require('multiparty');

const app = express();

app.use(express.json());
//app.use(express.text());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, 'client')));
app.post('/form', (req, res) => {
  let form = new multiparty.Form();
  let testFileName;
  form.on('part', function(part) {
    if (!part.filename) return;
    testFileName = part.filename;
    console.log(part.filename);
  });

  form.on('close', function() {
    res.status(200).send(testFileName);
  });
  form.parse(req);
  // let csv = bodyParser(req.body.jsondata);
  // csv = replaceNewLines(csv);
  // res.status(200).send(templater({csvData: csv}));
});

function replaceNewLines(str) {
  let reg = /\n/;
  while (str.indexOf('\n') !== -1) {
    str = str.replace(reg, '<br />')
  }
  return str;
}

let templater = _.template(
  "<!DOCTYPE html>" +
  "<html>" +
    "<head>" +
      "<meta charset='utf-8'>" +
      "<title>" +
        "CSV Report Generator" +
      "</title>" +
    "</head>" +
    "<body>" +
      "<h1>CSV Report Generator</h1>" +
      "<p>" +
        "<%= csvData %>" +
      "</p>" +
      "<form action='/form' method='POST'>" +
        "<label>" +
          "Input JSON:" +
          "<textarea rows='20' cols='50' name='jsondata'></textarea>" +
        "</label>" +
        "<input type='submit' value='Submit'>" +
      "</form>" +
      "<script src='app.js'></script>" +
    "</body>" +
  "</html>"
);

let bodyParser = (body) => {
  body = JSON.parse(body);
  let keys = Object.keys(body);
  let headerKeys = keys.filter(key => key !== 'children');
  let header = headerKeys.join(',') + '\n';

  function helper(child) {
    let children = child.children;
    console.log(typeof children);
    delete child.children;
    header += Object.values(child).join(',');
    header += '\n';
    for (let kid of children) {
      helper(kid);
    }
  }
  helper(body)
  return header;
}

const PORT = 3000;
app.listen(PORT);