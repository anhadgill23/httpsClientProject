/* Step 1 - Printing in Chunks
1. Your first function getAndPrintHTMLChunks will utilize the https library to GET a given URL.
You can use the example above as a reference or template.
2. This function should console.log each chunk of data as it is received, concatenated with a
newline character ('\n') so you can visualize each chunk.
3. Remember in this and each subsequent Step - you will always need to invoke (call) the function
you wrote.
*/

var https = require('https');
//does it matter if teh http command is inside or outside tge function?

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function(data) {
      console.log(data + '\n');
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  })
};

getAndPrintHTMLChunks();