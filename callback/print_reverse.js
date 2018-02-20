var https = require('https');
var getHTML = require("../http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (html) {

  /* Write your code here! */
  var modifiedC = html.split('').reverse().join('');
  console.log(modifiedC);
}

getHTML(requestOptions, printLowerCase);