var myfs=require('fs');
//console.log(myfs);
var data=myfs.readFileSync('whatnode.txt');
console.log(data.toString());