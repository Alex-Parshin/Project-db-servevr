let qB = document.getElementById("quote");
let req = $.get("http://localhost:591/quote");
req.done(function(data){
  let quote = JSON.parse(data);
  document.title= "Цитата#"+quote.number;
  qB.innerHTML= "Цитата #"+quote.number+ " " + quote.text;
  qB.style.display="block";
});
