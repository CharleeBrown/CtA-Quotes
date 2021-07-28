let fs = require('fs');
let http = require('http');


http.createServer(function (req, res) {
    fs.readFile(__dirname + req.url, function (err,data) {
      res.writeHead(200);
      res.end(data);
});
}).listen(8080);
