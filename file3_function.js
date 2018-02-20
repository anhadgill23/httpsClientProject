var https = require('https');

function getAndPrintHTML(options) {

  var buffer = '';

  https.get(options, function(response) {

    //response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function(data) {
      buffer += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log(buffer);
      console.log('Response stream complete.');
    });
  })
};

getAndPrintHTML(requestOptions);

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

//which is an object that contains values for the host and path, exactly like requestOptions