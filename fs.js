var fs = require('fs')
var http = require('http');
const { listenerCount } = require('process');

// fs.mkdirSync("Test1")

// fs.writeFileSync("demo.txt","This is the first file")
// fs.writeFileSync("demo.txt","This is the second line override")

// fs.appendFileSync("demo.txt","This is append text")

// var rd = fs.readFileSync("demo.txt","utf8")
// console.log(rd);

// fs.renameSync('demo.txt','test.txt')

// var removeFile = fs.unlinkSync("test.txt")
// if(removeFile == true){
//     console.log("Done")
// }

// sfs.mkdirSync("demo");
fs.writeFileSync("demo.txt","this is the demo file");
var content = fs.readFileSync('demo.txt','utf8');

// var express= require('express')
// const app = express()
// app.get("/",function(req,res){
//     res.send(content);
// })

// app.listen(3000,function(){
//     console.log("connected successfully");
// })

http.createServer(function(req,res){
    res.write(content);
    res.end();
}).listen(8080);
