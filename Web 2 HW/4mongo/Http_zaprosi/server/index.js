let express = require("express");
	cors = require("cors"),
	bodyParser=require("body-parser");
let app = express();
app.use(cors());
let db,collection;
let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
	
let urlencodedParser= bodyParser.urlencoded({extended:false});
const MongoClient = require("mongodb").MongoClient;


const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
app.use(express.static("../client"));


app.get("/",function(request,response){
		//response.send(users);
		
	response.send("/index.html");
});

app.post("/add",urlencodedParser,function(request,response){

	
	console.log(request.body.name);
	collection.insertMany(users, function(err, results){
				  
	//	console.log(results);
		//response.send(results);
		//dbClient.close();
		

});

});
app.get("/gets",function(request,response){
 
	collection.find().toArray(function(err, results){
                                  
		console.log(results);
		response.send(results);
		//dbClient.close();

});
});



mongoClient.connect(function(err, client){
      
	if(err) return console.log(err);
    dbClient = client;
	db = client.db("sandbox");
	collection = db.collection("humans");
    app.listen(591, function(){
        console.log("Сервер ожидает подключения...");
    });
});


process.on("SIGINT", () => {
    client.close();
    process.exit();
});

