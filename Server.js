//creating a server
var server =require('net').createServer();
server.listen('4444');

var listofusers=new Map();
var numberofusers=0;

//Sending message to the client
	server.on('connection',function(socket){
	socket.setEncoding('utf8');
	socket.write("Hi Welcome\n");
	numberofusers=listofusers.size;
	socket.write("Number of users in the chat room are:"+numberofusers);
		
//Nickname registration for chatting
	socket.write("\nTo Continue chat please register with your nickname using /nick nickname\n")

	var user = false; 	
	var username;
 	socket.on('data',function(chunk) {
//validating the nick name using Regular Expression
	var pattern = new RegExp(/^[\/]{1}nick [a-zA-Z]+/);                                 
	var result = pattern.test(chunk);
	
//client registering with nick name
	if(user == false ) {
			
		     	if(result) {
		     	
						username=chunk.substring(6);

	if (!listofusers.has(username)) {
		console.log("The nickname entered by the client is\n"+username);
    this.nickname = username;
		listofusers.set(username,socket);
		listofusers.forEach(validation);
		user=listofusers.has(username);
	
	//Sending message to other users about new user

		function validation(value,key)
		{
			if(value.nickname !== username)
		  	{
							value.write( username +"is Added to chat room\n");
				}
		}
		console.log("The nickname is registered\n");
		socket.write("Hi,Now you can chat with your friends\n");
	}
	else 
	
		socket.write("Nickname already exists,Please choose another nickname\n");
	     
}
	else
	
		socket.write("Please enter proper name\n");

}
//Broadcasting message to others
else{
	listofusers.forEach(msg);
	function msg(value,key){
		if(value.nickname !== username){
		value.write(username+":"+chunk);
		 }
	 } 
	}	
});	
//Broadcasting connection closed message to clients
socket.on('close',function(){
		listofusers.delete(username);
		listofusers.forEach(exit);
		function exit(value,key){
			value.write(username +" went offline");
		} 
  });
});
server.on('listening',function(){
console.log("server listening on port 4444");
});
