var https = require('https');

function getAndPrintHTML() {
  var buffer = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function(data) {
      buffer += data;
    });

    console.log(buffer);

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  })
};
getAndPrintHTML();

//IS THE OUTPUT CORRECT????