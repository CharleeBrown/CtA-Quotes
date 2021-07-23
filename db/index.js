var fs = require('fs');
var http = require('http');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://lee:Gamez2232!@c0ne.5lyko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

http.createServer(function (req, res) {
    fs.readFile(__dirname + req.url, function (err,data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
  
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
});
}).listen(8080);