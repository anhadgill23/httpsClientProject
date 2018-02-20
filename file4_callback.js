var https = require('https');

function getAndPrintHTML(options, callback) {

  /* Add your code here */

  var buffer = '';

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      buffer += data;
    });

    response.on('end', function() {
      callback(buffer);                         //// is this correct? I need to print buffer
      console.log('Response stream complete.');
    });
  })
}



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML(html) {
  console.log(html);
}

getAndPrintHTML(requestOptions, printHTML);  ///is this correct?

