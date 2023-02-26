const http = require("http");
const url = require("url");
const fs = require("fs");
// var adr = "http://localhost:8080/default.html?year=2017&month=febuary";
// var q = url.parse(adr,true);

// console.log(q.host);
// console.log(q.pathName);
// console.log(q.search);

// var qdata = q.query;
// console.log(qdata.month);


http.createServer(function(req, res){
    let q = url.parse(req.url,true);
    var filename = "."+q.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'Content-type':'text/html'});
            return res.end();
        }else{
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);