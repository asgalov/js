function checkTyping(){
  var check_area = document.getElementById("check_area");  
  console.log(check_area.value); 
  vocabulary.style.backgroundColor="yellow";
}

window.onload = function(){
  var vocabulary = document.getElementById("vocabulary");  
  vocabulary.value = "new text to type";
};

document.onkeypress = function(e){
  var keyCode = e.keyCode;
//  console.log(keyCode.toString()); 
  var id = keyCode.toString(); 
  var key = document.getElementById(id);  
  key.style.background="yellow";
};
