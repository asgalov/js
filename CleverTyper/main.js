function checkTyping(){
  var check_area = document.getElementById("check_area");  
  console.log(check_area.value); 
  var vocabulary = document.getElementById("vocabulary");  
  var str =  vocabulary.value;
  var index =  vocabulary.currentLetterIndex;
  console.log(str[index]); 
}

window.onload = function(){
  var vocabulary = document.getElementById("vocabulary");  
  vocabulary.value = "new text to type";
  vocabulary.currentLetterIndex = 0;
};

//document.onkeypress = function(e){
document.onkeydown = function(e){
  var keyCode = e.keyCode;
  var vocabulary = document.getElementById("vocabulary");  
  var str =  vocabulary.value;
  var index = vocabulary.currentLetterIndex;
  var id = keyCode.toString(); 
  console.log(str[index]+" "+id+" "+String.fromCharCode(keyCode)); 
  if (str[index] == String.fromCharCode(keyCode)){
    vocabulary.currentLetterIndex += 1;
  } else {
    console.log("aaaaaaaaaaaaaaaaaaxxi");
    event.preventDefault();
    var key = document.getElementById(id);  
    key.style.background="red";
  }
};
  
document.onkeyup= function(e){
    var keyCode = e.keyCode;
    var id = keyCode.toString(); 
    var key = document.getElementById(id);  
    key.style.background="white";
};
