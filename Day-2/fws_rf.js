var fs=require('fs');
var writeSrc='E:/nodescripts/fws_rf.txt';
fs.writeFileSync(writeSrc,"Hello world! Iam in fws_rf.txt",{"encoding":'utf8'});
	console.log("File Written in fw_rf.txt");
	//Now reading the same file to confirm data written
	fs.readFile(writeSrc,"utf8",function(err,data){
		if(err){ throw err; }
			console.log("Reading fws_rf.txt file");
			console.log(data);
			});