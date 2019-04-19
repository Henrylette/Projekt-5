

//Funktion som viser en del af skemaet
var currentSkema = 0; 
showTab(currentSkema); 

function showTab(n){
    
    var x = document.getElementsByClassName("mus-skema-box"); 
    x[n].style.display = "table"; 
    

}

// Funktion som viser hvert step i skemaet ved brug af knapperne
function next(n){

var x = document.getElementsByClassName("mus-skema-box"); 
 
  x[currentSkema].style.display = "none";

  currentSkema = currentSkema + n;
    
 showTab(currentSkema); 
}


//Funktion som viser den skrevende tekst når brugeren trykker på preview 

function showPreview() {
    
    var outputSkema1 = document.getElementById("input1").value; 
    var outputSkema2 = document.getElementById("input2").value; 
    
    document.getElementById("output1").innerText = outputSkema1; 
    document.getElementById("output2").innerText = outputSkema2;
}






