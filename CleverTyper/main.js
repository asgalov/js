function checkTyping(){
  var vocabulary = document.getElementById("vocabulary");  
  vocabulary.style.backgroundColor="yellow";
}

window.onload = function(){
  var vocabulary = document.getElementById("vocabulary");  
  vocabulary.value = "new text to type";
};

document.onkeypress = function(e){
  var keyCode = e.keyCode;
  window.alert(keyCode);
};