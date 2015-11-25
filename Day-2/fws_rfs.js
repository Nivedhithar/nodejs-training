var fs = require('fs');
var writeSource='E:/nodescripts/fws_rfs.txt';
//Writing to fws_rfs.txt file

fs.writeFileSync(writeSource,"Hello world! Iam in fws_rfs.txt",{"encoding":"utf8"});
console.log("File Written Successfully in fws_rfs.txt");

//Now reading the same file to confirm data written

var data=fs.readFileSync(writeSource,"utf8");
console.log("Reading fws_rfs file synchronously");
console.log(data);
