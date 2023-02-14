var http = require('http');
const fs = require("fs");
var home = fs.readFileSync('./index.html','utf-8');
var port = 8080;
var host = "localhost"
const server = http.createServer((req,res)=>{
    if(req.url === "/about"){
     return res.end("<h1>This is about page</h1>");
    }
    if(req.url === "/contact"){
        return res.end("<h1>contact page</h1>");
    }
    if(req.url === "/"){
        return res.end(home);
    }else{
        return res.end("<h1>404 Page is not found!</h1>"); 
    }
});
server.listen(port,host,()=>{
    console.log("ths port name is http//:localhost:8080")
})