var fs = require('fs');
var http = require('http');


http.createServer(function (req, res) {
    fs.readFile(__dirname + req.url, function (err,data) {
      
      res.writeHead(200);
      res.write("Hello");
      res.end(data);

});
}).listen(8080);
