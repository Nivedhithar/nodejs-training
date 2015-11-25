var fs=require('fs');
var writeSource='E:/nodescripts/fw_rfs.txt';
fs.writeFile(writeSource,"Hello world! Iam in fw_rfs.txt",{"encoding":'utf8'},function(err){
	if (err) {throw err;}
	console.log("File Written in fw_rfs.txt");
	//Now reading the same file to confirm data written
var data=fs.readFileSync(writeSource,"utf8");
		
			console.log("Reading fw_rfs.txt file");
			console.log(data);
		});