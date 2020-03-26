let express = require("express"),
bodyParser= require("body-parser");
let cors =require("cors");
let app = express();


app.use(express.static("../client"));
	app.use(cors());
let urlencodedParser= bodyParser.urlencoded({extended:false});
const MongoClient = require("mongodb").MongoClient;


const url = "mongodb://localhost:27017/"
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

app.get("/",function(request,response){
		//response.send(users);
		
	response.send("/index.html");
});

app.post("/add",urlencodedParser,function(request,response){

	
	console.log(request.body.image);
	console.log(request.body.description);
	let item={
		img: request.body.image,
		text: request.body.description
	}
	console.log(item);
	collection.insertOne(item, function(err, results){
	response.redirect("/");
	//	console.log(results);

	//	dbClient.close();
	});	

});

app.get("/gets",function(request,response){
 
	collection.find().toArray(function(err, results){
                                  
		console.log(results);
		response.send(results);
		//dbClient.close();

});
});

app.get("/check_users",function(request,response){
 
	users.find().toArray(function(err, results){
                                  
		console.log(results);
		response.send(results);
		response.redirect("/");
		//dbClient.close();

});
});

app.post("/registration",urlencodedParser,function(request,response){
 
	console.log(request.body.login);
	console.log(request.body.password);
	let item={
		login: request.body.login,
		password: request.body.password
	}
	users.insertOne(item, function(err, results){
	
		//	console.log(results);
	
		//	dbClient.close();
	
	
	});
	
});


mongoClient.connect(function(err, client){
      
	if(err) return console.log(err);
    dbClient = client;
	db = client.db("sandbox");
	collection = db.collection("items");
	users = db.collection("items");
    app.listen(80, function(){
        console.log("Сервер ожидает подключения...");
    });
});
process.on("SIGINT", () => {
    client.close();
    process.exit();
})
;