let express = require("express");
let app = express();
app.get("/",function(request,response){
	response.send("Hello, Node.js!");
});
app.get("/folder/page",function(request,response){
	let x=request.query.foo;
	response.send({foo:x});
});
app.listen(591);