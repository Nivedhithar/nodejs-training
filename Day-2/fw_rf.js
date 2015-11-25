var fs=require('fs');
var writeSrc='E:/nodescripts/fw_rf.txt';
fs.writeFile(writeSrc,"Hello world! Iam in fw_rf.txt",{"encoding":'utf8'},function(err){
	if (err) {throw err;}
	console.log("File Written in fw_rf.txt");
	//Now reading the same file to confirm data written
	fs.readFile(writeSrc,"utf8",function(err,data){
		if(err){ throw err; }
			console.log("Reading fw_rf.txt file");
			console.log(data);
		});
	});