let express = require("express");

let app = express();


app.use(express.static("../client"));


app.get("/",function(request,response){
		//response.send(users);
		
	response.send("/index.html");
});

app.listen(8080);