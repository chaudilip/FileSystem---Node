const http = require('http');
var url = require("url");
var fs = require('fs');

// ----------------- how to return a url name in content of page -----------------------
// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-type": "text/html"});
//     var q = url.parse(req.url,true).query;
//     var txt = q.year+" "+q.month;
//     res.end(txt);
// }).listen(8080);

// ------------------how to return data of html page in 8080 port home page ----------------------------------------------
// http.createServer(function(req,res){
//     fs.readFile("demoFile.html",function(err,data){
//         res.writeHead(200,{"Content-type":"text/html"});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);


//------------------how to open file ------------------------------
// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// ------------------how to append a text in file --------------------------------

// fs.appendFile('demoAppend.txt','HEllo Content!' , function(err){
//     if(err) throw err;
//     console.log("Saved");
// });

// -------------------how to write a content in file---------------------------------------------

// fs.writeFile("demoWrite.txt","Hello write!" , function(err){
//     if(err) throw err;
//     console.log("Saved");
// })

//----------------------Delete a file --------------------------------

// fs.unlink("demo.txt",function(err){
//     if(err) throw err;
//     console.log("Deleted Successfully");
// });

// ----------------------rename a file------------------------------------------

// fs.rename("renamedFile","demoRenamed.txt",function(err){
//     if(err) throw err;
//     console.log("Renamed Successfully");
// });

