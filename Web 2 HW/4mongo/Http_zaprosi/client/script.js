/*let button= document.getElementById("request");
	button.addEventListener("click",function(){
		let string={
		}
		let xhr=new XMLHttpRequest();
		xhr.open("GET","http://localhost:591/add",true);
		xhr.onreadystatechange=function(){
			if(this.readyState==this.DONE){
				if(this.status!=200){
				console.log("Ошибка",+this.status);
			}else{
				console.log(this.responseText);
			}
			}
		};
		let form = document.forms.myform;
		string.name = form.elements.name.value;
		string.age = form.elements.age.value;
		let sends = JSON.stringify(string);
		xhr.send(sends);
	});*/
	let user;
	let button1= document.getElementById("request1");
	let block=document.getElementById("block");
	button1.addEventListener("click",function(){
		let xhr=new XMLHttpRequest();
		xhr.open("GET","http://localhost:591/gets",true);
		xhr.onreadystatechange=function(){
			if(this.readyState==this.DONE){
				if(this.status!=200){ 
				console.log("Ошибка",+this.status);
			}else{
				console.log(this.responseText);
				user=JSON.parse(this.responseText);
				console.log(user);
				for(let i=0;i<user.length;i++){
					let li=document.createElement("li");
				li.innerHTML=user[i].name+" "+user[i].age;
				block.appendChild(li);
				}
			}
			}
		};
		
		xhr.send();
		
	});
	document.addEventListener("DOMContentLoaded", () => {
		let xhr=new XMLHttpRequest();
		xhr.open("GET","http://localhost:591/gets",true);
		xhr.onreadystatechange=function(){
			if(this.readyState==this.DONE){
				if(this.status!=200){ 
				console.log("Ошибка",+this.status);
			}else{
				console.log(this.responseText);
				user=JSON.parse(this.responseText);
				console.log(user);
				for(let i=0;i<user.length;i++){
					let li=document.createElement("li");
				li.innerHTML=user[i].name+" "+user[i].age;
				block.appendChild(li);
				}
			}
			}
		};
		
		xhr.send();
	  });

	 

/*$('#request1').on("click",function(){
	let request=$.get("http://localhost:8080");
		//let request=$.get("http://localhost:591/folder/page",{foo:"a",bar:"b"});

	request.done(function(data){
		console.log(data);
	});
	request.fail(function(jqXHR,textStatus,errorThrown){
		console.log(textStatus,errorThrown);
	});
});*/