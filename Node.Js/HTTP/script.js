const ht = require("node:http");

const server = ht.createServer(function(req,res){
    res.end("hello world");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
})

console.log("chal gyaa");
server.listen(3000);

