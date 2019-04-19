

/* Funktion som viser en del af skemaet*/
var currentSkema = 0; 
showTab(currentSkema); 

function showTab(n){
    
    var x = document.getElementsByClassName("mus-skema-box"); 
    x[n].style.display = "table"; 
}

/* Funktion som viser hvert step i skemaet*/
function next(n){

var x = document.getElementsByClassName("mus-skema-box"); 
 
  x[currentSkema].style.display = "none";

  currentSkema = currentSkema + n;
    
 showTab(currentSkema); 
}








