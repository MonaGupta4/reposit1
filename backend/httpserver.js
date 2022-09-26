const { readFileSync } = require('fs');
var myhttp=require('http');
myhttp.createServer((req,res)=>{
     console.log("request received");
     var filename=req.url.split('/')[1];
     console.log(filename);
     var data=readFileSync(filename);
     res.write(data.toString())
     
res.end("please wait....")}
).listen(4500);
