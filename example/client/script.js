let vm = new Vue({
    el:".container", 
    data: { 
            items:[
                {
                img:"picture.jpg",
                text:"Текст для картинки"
                },
                {
                    img:"picture.jpg",
                    text:"Второй текст для картинки"
                },
                {
                    img:"picture.jpg",
                    text:"Текст для картинки"
                },
                {
                img:"picture.jpg",
                text:"Второй текст для картинки"
                },
                {
                    img:"picture.jpg",
                    text:"Текст для картинки"
                },
                {
                img:"picture.jpg",
                text:"Второй текст для картинки"
                },
                {
                    img:"picture.jpg",
                    text:"Текст для картинки"
                },
                {
                img:"picture.jpg",
                text:"Второй текст для картинки"
                }
            ]
        } ,
        mounted: function(){
          
        }
});

document.addEventListener("DOMContentLoaded", () => {
    let xhr=new XMLHttpRequest();
    xhr.open("GET","http://localhost:8080/gets",true);
    xhr.onreadystatechange=function(){
        if(this.readyState==this.DONE){
            if(this.status!=200){ 
            console.log("Ошибка",+this.status);
        }else{
            
            vm.items=JSON.parse(this.responseText);
            console.log(vm.items);
        }
        }
    };
    
    xhr.send();
  });
