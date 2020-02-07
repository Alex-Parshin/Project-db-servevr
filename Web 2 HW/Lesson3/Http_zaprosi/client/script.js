let button= document.getElementById("request");
	button.addEventListener("click",function(){
		let xhr=new XMLHttpRequest();
		xhr.open("GET","http://localhost:591",true);
		xhr.onreadystatechange=function(){
			if(this.readyState==this.DONE){
				if(this.status!=200){
				console.log("Ошибка",+this.status);
			}else{
				console.log(this.responseText);
			}
			}
		};
		xhr.send();
	});
$('#request1').on("click",function(){
	let request=$.get("http://localhost:591");
		//let request=$.get("http://localhost:591/folder/page",{foo:"a",bar:"b"});

	request.done(function(data){
		console.log(data);
	});
	request.fail(function(jqXHR,textStatus,errorThrown){
		console.log(textStatus,errorThrown);
	});
});