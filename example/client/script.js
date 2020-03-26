let vm = new Vue({
    el:".wrap", 
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
            ],
            users:[{
                login:"gsd",
                password:"gdgd"
                }],
            login:"",
            password:"",
            pass:false
        } ,
        methods:{
            reg:function(){
                let xhr=new XMLHttpRequest();
                xhr.open("GET","http://localhost:8080/check_users",true);
                xhr.onreadystatechange=function(){
                    if(this.readyState==this.DONE){
                        if(this.status!=200){ 
                        console.log("Ошибка",+this.status);
                    }else{
                        
                        vm.users=JSON.parse(this.responseText);
                        console.log(vm.users);
                    }
                    }
                };
                
                xhr.send();
                
             
            }
        },
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
