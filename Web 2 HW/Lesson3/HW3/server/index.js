let express = require("express");
    cors = require("cors"),
    fs = require("fs");
let app = express();
app.use(cors());
app.get("/quote",function(request,response){
	fs.readFile("database.txt","utf-8",function(err,content){
        let quotes=content.split("\n");
       let index=Math.floor(Math.random()*(quotes.length-1));
        let result={
            number :index+1,
           text :quotes[index]
        };
        response.send(JSON.stringify(result));
    });
});

app.listen(591);