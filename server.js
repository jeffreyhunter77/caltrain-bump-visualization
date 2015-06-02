var express = require('express')
;

function port() {
  return process.env.PORT || 3000;
}

var app = express();
app.use(express.static(__dirname));

var server = app.listen(port(), function() {
  console.log("Server listening at %s:%s", server.address().address, server.address().port);
});
