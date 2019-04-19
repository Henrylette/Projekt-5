

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
    
    //skema - Højt drive
    var outputSkema1 = document.getElementById("input1").value; 
    var outputSkema2 = document.getElementById("input2").value;
    var outputSkema3 = document.getElementById("input3").value; 
    var outputSkema4 = document.getElementById("input4").value; 
    var outputSkema5 = document.getElementById("input5").value; 
    
    //skema - et stærkt team
    var outputSkema1 = document.getElementById("input6").value; 
    var outputSkema2 = document.getElementById("input7").value;
    var outputSkema3 = document.getElementById("input8").value; 
    var outputSkema4 = document.getElementById("input9").value; 
    var outputSkema5 = document.getElementById("input10").value; 
    
    

    //skema - Højt drive
    document.getElementById("output1").innerText = outputSkema1; 
    document.getElementById("output2").innerText = outputSkema2;
    document.getElementById("output3").innerText = outputSkema3;
    document.getElementById("output4").innerText = outputSkema4;
    document.getElementById("output5").innerText = outputSkema5;
    
    //skema - Højt drive
    document.getElementById("output6").innerText = outputSkema6; 
    document.getElementById("output7").innerText = outputSkema7;
    document.getElementById("output8").innerText = outputSkema8;
    document.getElementById("output9").innerText = outputSkema9;
    document.getElementById("output10").innerText = outputSkema10;
}






