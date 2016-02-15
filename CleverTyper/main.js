URL = "http://localhost:8000/vocabulary.txt";

function checkTyping(){
    var check_area = document.getElementById("check_area");  
    console.log(check_area.value); 
    var vocabulary = document.getElementById("vocabulary");  
    var str =  vocabulary.value;
    var index =  vocabulary.currentLetterIndex;
    console.log(str[index]); 
}

window.onload = function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            setNewVocabulary(xhttp.responseText);
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();
};

function setNewVocabulary(text){
    console.log("set new vocabulary "+text); 
    var vocabulary = document.getElementById("vocabulary");  
    vocabulary.value = text;
    vocabulary.currentLetterIndex = 0;    
}
    
document.onkeydown = function(e){
    var keyCode = e.keyCode;
    var vocabulary = document.getElementById("vocabulary");  
    var str =  vocabulary.value;
    var index = vocabulary.currentLetterIndex;
    var id = keyCode.toString(); 
    console.log(str[index]+" "+id+" "+String.fromCharCode(keyCode)+
        +" "+ vocabulary.value.charCodeAt(index)); 
    if (str[index] === (String.fromCharCode(keyCode).toLowerCase())){
        vocabulary.currentLetterIndex += 1;
    } else {
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
