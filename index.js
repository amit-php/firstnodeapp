var http = require('http');
const fs = require("fs");
var home = fs.readFileSync('./index.html','utf-8');
var port = process.env.PORT;
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
server.listen(port,()=>{
    console.log("server is working")
})
