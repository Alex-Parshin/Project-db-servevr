let express =require("express"),
    bodyParser=require("body-parser");
let app = express();
let urlencodedParcer=bodyParser.urlencoded({extended:false});
app.use(express.static("../client"));
app.post("/enroll",urlencodedParcer,function(request,response){

    response.redirect("/records.html");
});
app.get("/",urlencodedParcer,function(request,response){

    response.redirect("/index.html");
    
	//response.sendFile(__dirname + '/index.html');
});


app.listen(591);