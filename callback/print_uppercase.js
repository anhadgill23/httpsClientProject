var https = require('https');
var getHTML = require("../http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  var modifiedA = html.toUpperCase();
  console.log(modifiedA);
}

getHTML(requestOptions, printUpperCase);
